import useAuth from "../../hooks/useAuth";
import "./connectModal.scss";
interface Props {
  showConnectModal: boolean;
  setShowConnectModal?: any;
}
const ConnectModal: React.FC<Props> = ({
  showConnectModal,
  setShowConnectModal,
}) => {
  const { login } = useAuth();

  const connectMetamask = () => {
    login(1);
    setShowConnectModal(false);
  };
  const connectWalletConnector = () => {
    login(2);
    setShowConnectModal(false);
  };
  const connectCoinbase = () => {
    login(3);
    setShowConnectModal(false);
  };
  const onClose = () => {
    setShowConnectModal(false);
  };
  return (
    <div
      className={
        showConnectModal === true ? "connectModal active" : "connectModal"
      }
    >
      <div className="modelContent">
        <div className="connectWalletHeader">
          <h1 className="connectWalletTitle">Connect Wallet</h1>
          <button className="connectModalCloseButton" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="connectWalletWrapper">
          <div className="metaMask" onClick={connectMetamask}>
            <div className="left">
              <div className="icon">
                <img src="assets/metamask.png" alt="" />
              </div>
            </div>
            <div className="middle">
              <h2>Metamask</h2>
              <p>Connect using browser wallet</p>
            </div>
            <div className="right">
              <button>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          {/* <div className="coinbase" onClick={connectCoinbase}>
            <div className="left">
              <div className="icon">
                <img src="assets/coinbase.png" alt="" />
              </div>
            </div>
            <div className="middle">
              <h2>Coinbase</h2>
              <p>Connect using coinbase</p>
            </div>
            <div className="right">
              <button>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="wallet" onClick={connectWalletConnector}>
            <div className="left">
              <div className="icon">
                <img src="assets/wallet-connect.png" alt="" />
              </div>
            </div>
            <div className="middle">
              <h2>Wallet Connect</h2>
              <p>Connect using mobile wallet</p>
            </div>
            <div className="right">
              <button>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div> */}
        </div>
        <img src="assets/bg_02.png" alt="" className="connectBg" />
      </div>
    </div>
  );
};
export default ConnectModal;
