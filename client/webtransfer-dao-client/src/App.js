import React from 'react';

const bindWallet = async ({ setError, setTxs, ether, addr }) => {
  if(window.ethereum) {
    window.ethereum.enable().then(function(acc) {
        App.account = acc[0];
        //TODO: Hide button and disable in the future
    });
  }
};

function MetaMaskAuth() {
  if(window.ethereum) {
    return (
      <ConnectMetaMask onClick={bindWallet} />
    )
  } else {
    return (
      <GetWallet />
    )
  }
}

function ConnectMetaMask(props) {
  return (  
    <button onClick={props.onClick}>
      Connect with MetaMask
    </button>
  );
}

function GetWallet(props) {
  return (
    <button onClick={() => window.open("https://metamask.io/download/")}>
      Get a wallet!
    </button>
  );
}

export default function App() {
  return (
    <div>
      <MetaMaskAuth />
    </div>
  );
}