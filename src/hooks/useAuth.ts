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

      await activate(connector!);
      if (chainId !== currentNetwork) {
        if (connector !== networkConnector) {
          toast.error(
            "Unsupported Network. This platform work on Ethereum Network"
          );
          connector = networkConnector;
          await activate(connector);
        }
      }
    },
    [activate, chainId]
  );

  const logout = useCallback(() => {
    deactivate();
    connector = networkConnector;
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
