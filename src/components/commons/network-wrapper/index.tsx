/* eslint-disable eqeqeq */
import React from "react";

const network = process.env.REACT_APP_NETWORK_ID;

type PropsType = {
  children?: any;
  info?: any;
  network: number;
};

const NetworkWrapper = ({ children, info, network }: PropsType) => {
  // prettier-ignore
  return +walletReducer.chainId === +network ? (
        children
    ) : (
        <div>{info}</div>
    );
};

export default NetworkWrapper;
