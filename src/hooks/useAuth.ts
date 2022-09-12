import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  CoinbaseWallet,
  injectedConnector,
  networkConnector,
  walletConnector,
} from "../utils/connectors";
import { toast } from "react-hot-toast";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { currentNetwork } from "../utils";
// import { currentNetwork } from 'utils'

let connector: AbstractConnector | null = null;
connector = networkConnector;

const useAuth = () => {
  const { chainId, activate, deactivate } = useWeb3React();

  const login = useCallback(
    async (walletId = 0) => {
      if (walletId === 1) {
        connector = injectedConnector;
      } else if (walletId === 2) {
        connector = walletConnector;
      } else if (walletId === 3) {
        connector = CoinbaseWallet;
      }

      await activate(connector!, async (e) => {
        console.log(e.message);

        if (
          e.message.toLowerCase() ===
          "No Ethereum provider was found on window.ethereum.".toLowerCase()
        ) {
          toast.error(
            "Please open Metamask app and visit https://mint.arenamon.com from Metamask browser."
          );
        }

        if (e.message.toLowerCase().includes("unsupported chain id")) {
          toast.error(
            "Select the Ethereum network on your wallet and try connecting again"
          );
          connector = networkConnector;
          await activate(connector);
        }
      });

      // console.log("aqui llegue");

      // if (chainId !== currentNetwork) {
      //   console.log("aquicas");

      //   if (connector !== networkConnector) {
      //     toast.error(
      //       "Select the Ethereum network on your wallet and try connecting again"
      //     );
      //     connector = networkConnector;
      //     await activate(connector);
      //   }
      // }
    },
    [chainId]
  );

  const logout = useCallback(() => {
    deactivate();
    connector = networkConnector;
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
