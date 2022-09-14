import "./footer.scss";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import ConnectModal from "../../components/connectModal/ConnectModal";
import { truncateWalletString } from "../../utils";
import { REACT_APP_NETWORK_ID } from "../../config";
export default function Footer() {
  const [showConnectModal, setShowConnectModal] = useState(false);

  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();
  useEffect(() => {
    const isLoggedin = account && active && chainId === REACT_APP_NETWORK_ID;
    setLoginStatus(!!isLoggedin);
  }, [connector, library, account, active, chainId]);
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="top">
          <div className="logo">
            <HashLink to="/#home">
              <img src="assets/logo.png" alt="" />
            </HashLink>
          </div>
          {/* <div className="myForm">
            <h2>Get Updates!</h2>
            <span>
              <input type="text" placeholder="enter your email" />
              <button className="send">
                <img src="assets/send_btn.png" alt="" />
              </button>
            </span>
          </div> */}
        </div>
        {/* <div className="links">
          <ul>
            <li>
              <a
                href="https://arenamon.com/search"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href="https://arenamon.com/simulator"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                Simulator
              </a>
            </li>
            <li>
              <a
                href="https://arenamon.com/schedule"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="https://arenamon.com/winners"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                Winners
              </a>
            </li>
            <li>
              <a
                href="https://arenamon.com/howtoplay"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                How To Play
              </a>
            </li>
            <li>
              <a
                href="https://beta.arenamon.com/disclaimer-arenamon"
                className=""
                target="_blank"
                rel="noreferrer"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div> */}
        {/* <div className="socialLinks">
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
            {/* <img src="assets/opensea.svg" alt="" /> 
            <i className="fab fa-discord"></i>
          </a>
        </div> */}
      </div>
      <span className="copy">
        <p>©2022 ArenaMon League</p>
        <p>All rights reserved.</p>
      </span>
      <img src="assets/dragon_01.png" alt="" className="dragon" />
      <img src="assets/dragon.png" alt="" className="dragon_mob" />

      <img src="assets/bg_06.png" alt="" className="footbg" />
      <img src="assets/bg_03.png" alt="" className="footbg_mob" />
      <div className="footWallet">
        <div
          className={"connectBtn"}
          onClick={() => {
            !loginStatus && setShowConnectModal(true);
          }}
        >
          <p>
            {loginStatus ? truncateWalletString(account!) : "Connect Wallet"}
          </p>
          <img src="assets/wallet_btn_02.png" alt="" />
        </div>
      </div>
      <ConnectModal
        showConnectModal={showConnectModal}
        setShowConnectModal={setShowConnectModal}
      />
    </div>
  );
}
