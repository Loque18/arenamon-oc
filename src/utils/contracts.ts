import "@ethersproject/shims";
import { currentNetwork, getContractObj } from ".";
import { NFTMintEngineDetail } from "./typs";
import { BigNumber, ethers } from "ethers";
import { RPC_URLS } from "./connectors";
import toast from "react-hot-toast";

import mapWhitelist from "./mapWhitelist.json";

/****************** NFT MINTING ******************/

export async function getBalanceOf(
  address: string,
  provider: any,
  chainId: number
) {
  const ArenamonNFTContract: any = getContractObj(
    "ArenamonNFT",
    chainId,
    provider
  );

  let balance: BigNumber = BigNumber.from(0);
  try {
    balance = await ArenamonNFTContract.balanceOf(address);
  } catch (e) {
    console.log(e);
  }
  return balance.toNumber();
}

export async function purchase(
  chainId: number,
  provider: any,
  account: any,
  numberOfTokens: number
) {
  const ArenamonNFTContract: any = getContractObj(
    "ArenamonNFT",
    chainId,
    provider
  );
  try {
    // const isPreSaleActive = false;
    // const isPublicSaleActive = false;
    const isPreSaleActive = await ArenamonNFTContract.isPreSaleActive().catch(
      (err: any) => {
        console.log({ isPreSaleActive: err });
        return false;
      }
    );
    const isPublicSaleActive =
      await ArenamonNFTContract.isPublicSaleActive().catch((err: any) => {
        console.log({ isPublicSaleActive: err });
        return false;
      });
    // const step = await ArenamonNFTContract.SALE_STEP();
    // console.log({ step });

    let bSuccess = false;

    if (isPublicSaleActive === true) {
      bSuccess = await mintPublic(chainId, provider, account, numberOfTokens);
    } else if (isPreSaleActive === true) {
      bSuccess = await mintWhitelist(
        chainId,
        provider,
        account,
        numberOfTokens
      );
    } else {
      toast.error("Sale is not opened.");
    }

    return bSuccess;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function mintWhitelist(
  chainId: number,
  provider: any,
  account: string | number,
  numberOfTokens: number
) {
  const ArenamonNFTContract: any = getContractObj(
    "ArenamonNFT",
    chainId,
    provider
  );
  try {
    const index = (mapWhitelist as any).claims[account]?.index;
    const amount = (mapWhitelist as any).claims[account]?.amount;
    var proof = (mapWhitelist as any).claims[account]?.proof;

    var big_index: BigNumber = index
      ? BigNumber.from(index)
      : BigNumber.from(0);
    var big_amount: BigNumber = amount
      ? BigNumber.from(amount)
      : BigNumber.from(0);
    if (proof === undefined) proof = [];

    const presaleMintedCount = await ArenamonNFTContract.m_mapPresaleMintCount(
      account
    );
    const presaleMintLimit = await ArenamonNFTContract.PRESALE_MINT_LIMIT();
    const leafNode = await ArenamonNFTContract.toLeaf(
      account,
      big_index,
      big_amount
    );
    const isWhitelisted = await ArenamonNFTContract.isWhiteListed(
      leafNode,
      proof
    );

    if (isWhitelisted === false) {
      toast.error("Your wallet is not registered");
      return false;
    }

    if (
      presaleMintedCount.toNumber() + numberOfTokens >
      presaleMintLimit.toNumber()
    ) {
      toast.error("Mint count is higher than limit");
      return false;
    }

    const nftPrice: BigNumber = await ArenamonNFTContract.PRESALE_PRICE();

    const tx = await ArenamonNFTContract.mintWhitelist(
      account,
      numberOfTokens,
      big_index,
      big_amount,
      proof,
      {
        value: nftPrice.mul(numberOfTokens),
      }
    );
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function mintPublic(
  chainId: number,
  provider: any,
  account: any,
  numberOfTokens: ethers.BigNumberish
) {
  const ArenamonNFTContract: any = getContractObj(
    "ArenamonNFT",
    chainId,
    provider
  );
  try {
    var nftPrice: BigNumber = await ArenamonNFTContract.PUBLIC_PRICE();

    const publicMintedCount = await ArenamonNFTContract.m_mapPublicMintCount(
      account
    );
    const publicMintLimit = await ArenamonNFTContract.PUBLIC_MINT_LIMIT();

    if (
      publicMintedCount.toNumber() + numberOfTokens >
      publicMintLimit.toNumber()
    ) {
      toast.error("Mint count is higher than limit");
      return false;
    }

    const tx = await ArenamonNFTContract.mintPublic(numberOfTokens, {
      value: nftPrice.mul(numberOfTokens),
    });
    await tx.wait(1);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getMintEngineInfo() {
  const jsonProvider = new ethers.providers.JsonRpcProvider(
    RPC_URLS[+currentNetwork]
  );
  const ArenamonNFTContract: any = getContractObj(
    "ArenamonNFT",
    currentNetwork,
    jsonProvider
  );
  try {
    const [
      isPreSaleActive,
      isPublicSaleActive,
      maxSupply,
      totalSupply,
      whitelistCost,
      publicCost,
      publicMintLimit,
    ] = await Promise.all([
      ArenamonNFTContract.isPreSaleActive(),
      ArenamonNFTContract.isPublicSaleActive(),
      ArenamonNFTContract.MAX_SUPPLY(),
      ArenamonNFTContract.totalSupply(),
      ArenamonNFTContract.PRESALE_PRICE(),
      ArenamonNFTContract.PUBLIC_PRICE(),
      ArenamonNFTContract.PUBLIC_MINT_LIMIT(),
    ]);

    const nftMintDetail: NFTMintEngineDetail = {
      isPreSaleActive: isPreSaleActive,
      isPublicSaleActive: isPublicSaleActive,
      maxSupply: maxSupply.toNumber(),
      totalSupply: totalSupply.toNumber(),
      whitelistCost: parseFloat(ethers.utils.formatEther(whitelistCost)),
      publicCost: parseFloat(ethers.utils.formatEther(publicCost)),
      publicMintLimit: publicMintLimit.toNumber(),
    };

    return nftMintDetail;
  } catch (e) {
    console.log(e);
    return null;
  }
}
