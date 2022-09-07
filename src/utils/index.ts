import { Contract } from "@ethersproject/contracts";
import { REACT_APP_NETWORK_ID } from "../config";
import ArenamonNFT_ABI from "../contracts/ArenamonNFT.json";

export const Networks = {
  ETHMainNet: 1,
  RinkerbyTestNet: 4,
};

// smart contracts
export const CONTRACTS_BY_NETWORK = {
  [Networks.ETHMainNet]: {
    ArenamonNFT: {
      address: "0x0DFE3991B2aa8B3e897BE568d6945356208ccf15",
      abi: ArenamonNFT_ABI,
    },
  },
  [Networks.RinkerbyTestNet]: {
    ArenamonNFT: {
      address: "0xF8d39615C69413539f827ca55f43209bE0479AdE",
      abi: ArenamonNFT_ABI,
    },
  },
};

export const currentNetwork = REACT_APP_NETWORK_ID;

// export const baseApiUrl = process.env.REACT_APP_API_URL;

export function getContractInfo(name: string, chainId: null | number = null) {
  if (!chainId) chainId = currentNetwork;

  const contracts: any = CONTRACTS_BY_NETWORK[chainId];
  if (contracts) {
    return contracts[name];
  } else {
    return null;
  }
}

export function truncateWalletString(walletAddress: string) {
  if (!walletAddress) return walletAddress;
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(0, 7);
  const endStr = walletAddress.substring(lengthStr - 7, lengthStr);
  return startStr + "..." + endStr;
}

export function truncateHashString(txhash: string) {
  if (!txhash) return txhash;
  const lengthStr = txhash.length;
  const startStr = txhash.substring(0, 10);
  const endStr = txhash.substring(lengthStr - 10, lengthStr);
  return startStr + "..." + endStr;
}

export function getContractObj(name: string, chainId: number, provider: any) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(info.address, info.abi, provider);
}

export function getContractObjWithAddress(
  name: string,
  chainId: number,
  provider: any,
  contractAddress: string
) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(contractAddress, info.abi, provider);
}

export const shorter = (str: string) =>
  str?.length > 8 ? str.slice(0, 6) + "..." + str.slice(-4) : str;
