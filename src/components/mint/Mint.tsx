import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../timer/Timer";
import { truncateWalletString } from "../../utils";
import "./mint.scss";
import { NFTMintEngineDetail } from "../../utils/typs";
import {
  getMintEngineInfo,
  purchase,
  getBalanceOf,
} from "../../utils/contracts";
import toast from "react-hot-toast";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { REACT_APP_NETWORK_ID } from "../../config";

type PropsType = {
  onModalShow?(flag: boolean): void;
};

export default function Mint({ onModalShow }: PropsType) {
  const [showMint, setShowMint] = useState(false);
  const [mintCount, setMintCount] = useState(0);

  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();
  const [mintEngineDetail, setMintEngineDetail] =
    useState<NFTMintEngineDetail | null>(null);

  const [userBalance, setUserBalance] = useState<number>(0);
  const [mintsLeft, setMintsLeft] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    getMintEngineInfo().then(
      (nftMintEngineDetail: NFTMintEngineDetail | null) => {
        setMintEngineDetail(nftMintEngineDetail);
      }
    );
  }, []);

  const decreaseHandle = () => {
    if (mintCount > 0) {
      setMintCount(mintCount - 1);
    }
  };
  const increaseHandle = () => {
    let mintLimit = mintsLeft;
    // let mintLimit = mintEngineDetail?.isPublicSaleActive ? 5 : 3;
    if (mintCount < mintLimit) {
      setMintCount(mintCount + 1);
    }
  };
  useEffect(() => {
    const isLoggedin = account && active && chainId === REACT_APP_NETWORK_ID;
    setLoginStatus(!!isLoggedin);

    if (isLoggedin) {
      getBalanceOf(account, library.getSigner(), chainId!).then((balance) => {
        setUserBalance(balance);
        const mintsLeeft = mintEngineDetail?.publicMintLimit! - balance;

        setMintsLeft(mintsLeeft);
      });
    }
  }, [connector, library, account, active, chainId]);

  const mintTokens = async () => {
    if (!loginStatus) {
      toast.error("Please connect wallet correctly!");
      return;
    }

    if (mintCount <= 0) {
      toast.error("Mint Count should be over than 0");
      return;
    }
    const load_toast_id = toast.loading("Please wait for Mint...");
    try {
      const bSuccess = await purchase(
        chainId!,
        library.getSigner(),
        account,
        mintCount
      );
      if (bSuccess) {
        toast.success("Mint Success!");

        // new balance
        const newBalance = userBalance + mintCount;
        setUserBalance(newBalance);

        // new mints left
        const newMintsLeft = mintsLeft - mintCount;
        setMintsLeft(newMintsLeft);

        // reset mint count
        setMintCount(0);

        navigate("/thankyou");

        // setTimeout(() => {
        //   getMintEngineInfo().then(
        //     (nftMintEngineDetail: NFTMintEngineDetail | null) => {
        //       setMintEngineDetail(nftMintEngineDetail);
        //     }
        //   );
        // }, 2000);
      } else {
        toast.error("Mint Failed!");
      }
    } catch (error) {
      toast.error("Mint Failed!");
    }
    toast.dismiss(load_toast_id);
  };

  return (
    <div className="mint">
      <div className="status">
        <span>
          <p>Mint Price : </p> <h3>{mintEngineDetail?.publicCost || 0} ETH</h3>
        </span>
        {loginStatus ? (
          <span>
            <p>Your nfts : </p>{" "}
            <h3>
              {userBalance && userBalance > 0 ? userBalance : 0}
              {/* {mintEngineDetail?.maxSupply! - mintEngineDetail?.totalSupply!} /{" "}
            {mintEngineDetail?.maxSupply} */}
            </h3>
          </span>
        ) : null}
        <span>
          <p> Max mint per address is</p>
          <h3 style={{ color: "white", fontSize: "1rem" }}>
            {mintEngineDetail?.publicMintLimit}
          </h3>
        </span>
        <span>
          <a
            href="https://beta.arenamon.com/disclaimer-arenamon"
            target="_blank"
            rel="noreferrer"
          >
            Disclaimer
          </a>
        </span>
      </div>
      <div className="hline"></div>

      {loginStatus ? (
        <>
          <div className="mintCount">
            <div className="mintPlus" onClick={decreaseHandle}>
              <i className="fas fa-minus"></i>
            </div>

            <span className="mintCountValue" style={{}}>
              {mintCount}
            </span>
            <div className="mintPlus" onClick={increaseHandle}>
              <i className="fas fa-plus"></i>
            </div>

            <div className="mintNow" onClick={mintTokens}>
              <p>Mint Now</p>
              <img src="assets/mint_btn.png" alt="" />
            </div>
          </div>
        </>
      ) : (
        <div
          className={"connectBtn"}
          onClick={() => {
            !loginStatus && onModalShow!(true);
          }}
        >
          <p>
            {loginStatus ? truncateWalletString(account!) : "Connect Wallet"}
          </p>
          <img src="assets/wallet_btn_01.png" alt="" />
        </div>
      )}
      <div className="hline"></div>
      <h2>OR</h2>
      <div className="buyCredit">
        {/* <p>Buy With Credit Card</p> */}
        {/* <img src="assets/buy_btn.png" alt="" className='btnBg' /> */}
        <CrossmintPayButton
          collectionTitle="ArenaMon"
          collectionDescription="ArenaMon is an exciting online tournament where 10,000 monsters fight against each other on their own for ETHEREUM PRIZES. 50% of our OpenSea royalties are going back to our NFT investors."
          collectionPhoto="https://arenamon.com/img/front/images/ArenaMon-Logo.png"
          clientId="1d7cf81b-b1c1-4524-aea5-bd14cc95cb4b"
          className="buyCard"
          mintConfig={{ type: "erc-721", price: "0.15", numberOfTokens: 1 }}
        />
      </div>

      <div className="socialLinks">
        <a
          href="https://mobile.twitter.com/ArenaMon_NFT"
          className="twitter"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/c/ArenaMon/videos"
          className="discord"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/arenamon_nft/"
          className="discord"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://discord.gg/arenamon"
          className="discord"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img src="assets/opensea.svg" alt="" /> */}
          <i className="fab fa-discord"></i>
        </a>
      </div>
      <img src="assets/mint_bar.png" alt="" className="bar" />
    </div>
  );
}
