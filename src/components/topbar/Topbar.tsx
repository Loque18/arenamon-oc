import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { REACT_APP_NETWORK_ID } from "../../config";
import { truncateWalletString } from "../../utils";
import ConnectModal from "../connectModal/ConnectModal";
import "./topbar.scss";

type MenuType = {
  menuOpen?: boolean;
  setMenuOpen?(flag: boolean): void;
};
export default function Topbar({ menuOpen, setMenuOpen }: MenuType) {
  const [showConnectModal, setShowConnectModal] = useState(false);

  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();
  useEffect(() => {
    const isLoggedin = account && active && chainId === REACT_APP_NETWORK_ID;
    setLoginStatus(!!isLoggedin);
  }, [connector, library, account, active, chainId]);

  return (
    <>
      <div className="topbar" id="home">
        <div className="topContent">
          <div className="logo">
            <HashLink to="/">
              <img src="assets/logo.png" alt="" />
            </HashLink>
          </div>

          <div className="btns">
            <div
              className={"connectBtn"}
              onClick={() => {
                !loginStatus && setShowConnectModal(true);
              }}
            >
              <p>
                {loginStatus
                  ? truncateWalletString(account!)
                  : "Connect Wallet"}
              </p>
              <img src="assets/wallet_btn_02.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ConnectModal
        showConnectModal={showConnectModal}
        setShowConnectModal={setShowConnectModal}
      />
    </>
  );
}
