import React, { useEffect } from "react";
import toast from "react-hot-toast";

type Props = {
  setCurrentAccount: any,
  setNetwork:any
  currentAccount:any
};

export const networks = {
  "1": "Ethereum Mainnet",
  "3": "Ropsten",
  "2a": "Kovan",
  "4": "Rinkeby Testnet",
  "5": "Goerli",
  "61": "BSC Testnet",
  "38": "BSC Mainnet",
  "89": "Polygon Mainnet",
  "13881": "Polygon Testnet",
  "a86a": "AVAX Mainnet",
};

const ConnectWallet = ({currentAccount,setCurrentAccount,setNetwork}: Props) => {
  const connectWallet = async () => {
    try {
      const { ethereum }: any = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }

      // Fancy method to request access to account.
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // Boom! This should print out public address once we authorize Metamask.
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum }: any = window;
    if (!ethereum) {
      toast("Make sure you have MetaMask!");
      return;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      connectWallet();
    }
    
    // This is the new part, we check the user's network chain ID
    const chainId = await ethereum.request({ method: "eth_chainId" });
    if(chainId != '0x4') alert("Please switch to " + networks['0x4']);
    setNetwork(networks[chainId]);

    ethereum.on("chainChanged", handleChainChanged);
    ethereum.on("accountsChanged", (accounts) => {
      window.location.reload();
    });

    // Reload the page when they change networks
    function handleChainChanged(_chainId) {
      window.location.reload();
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  if(currentAccount){
   return (
    <div className="text-sm w-full md:text-base text-center font-display font-medium bg-gradient-to-r from-purple-500 bg-opacity-70 to-pink-400  px-4 rounded-lg py-1">
    {currentAccount}
  </div>
   )
  }
  return <button onClick={connectWallet}>Connect Wallet</button>;
};

export default ConnectWallet;
