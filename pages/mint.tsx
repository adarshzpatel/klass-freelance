import { StarIcon } from "@heroicons/react/outline";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Hero/Carousel";
import FreeMint from "../components/Mint/FreeMint";
import PublicMint from "../components/Mint/PublicMint";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { providers } from "ethers";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // required
    },
  },
};

const networks = {
  "0x1": "Ethereum Mainnet",
  "0x3": "Ropsten",
  "0x2a": "Kovan",
  "0x4": "Rinkeby Testnet",
  "0x5": "Goerli",
  "0x61": "BSC Testnet",
  "0x38": "BSC Mainnet",
  "0x89": "Polygon Mainnet",
  "0x13881": "Polygon Testnet",
  "0xa86a": "AVAX Mainnet",
};

let web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "rinkeby", // optional
    cacheProvider: false,
    theme: "dark",
    providerOptions, // required
  });
}

const Mint = () => {
  const [loading, setLoading] = useState<boolean>(Boolean);
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [network, setNetwork] = useState<string>("");
  const [provider, setProvider] = useState<any>();
  const [web3Provider, setWeb3Provider] = useState<providers.Web3Provider>();

  const connectWallet = async () => {
    try {
      const instance = await web3Modal.connect();
      setProvider(instance);
      const provider = new providers.Web3Provider(instance);
      setWeb3Provider(provider);
      const signer = await provider.getSigner();
      setCurrentAccount(await signer.getAddress());
      const chainId = await (await provider.getNetwork()).chainId;
      console.log(chainId);
      setNetwork(networks["0x" + chainId]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log("accountsChanged", accounts);
        setCurrentAccount(accounts[0]);
      };

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload();
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        setCurrentAccount("");
        setNetwork("");
        window.location.reload();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);
  return (
    <>
      <Head>
        <title>Klass | Public Mint</title>
      </Head>
      <div className="bg-slate-800 p-4 min-h-screen w-full flex items-center justify-center">
      <div className="h-96 w-96 bg-gradient-to-r rounded-full blur-3xl opacity-25  from-orange-400 via-fuchsia-500 to-violet-500 fixed"></div>
        <div className="flex flex-col gap-4 items-center justify-center h-full max-w-screen-lg ">
          <div className="relative mb-4">
            <h1 className="select-none text-2xl sm:text-4xl  md:text-5xl cursor-pointer text-center  font-display drop-shadow-lg brightness-110 italic  -top-1 relative   font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-600 via-fuchsia-600 to-pink-400 ">
              Klass Mint
            </h1>
            <h1 className="select-none text-2xl sm:text-4xl md:text-5xl text-center  absolute top-0  font-display italic blur-2xl  font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-500 via-fuchsia-600 to-pink-400 ">
              Klass Mint
            </h1>
            
          </div>
          <div className="flex gap-8 flex-col lg:flex-row items-center  justify-center">
            <Carousel />
            <div className="flex flex-col justify-center gap-3 flex-grow">
             
              {network && (
                <div className=" font-medium py-1 w-full rounded-lg text-center bg-slate-700 text-slate-200 font-display">
                  {network}
                </div>
              )}
              {currentAccount && (
                <div className="text-sm w-full md:text-base text-center font-display font-medium bg-gradient-to-r from-purple-500 bg-opacity-70 to-pink-400  px-4 rounded-lg py-1">
                  {currentAccount.slice(0,10) + "..." + currentAccount.slice(-10,-1)}
                </div>
              )}
              {!currentAccount && (
                <button className="lg:px-20 text-xl" onClick={connectWallet}>Connect Wallet</button>
              )}
              {currentAccount && (
                <PublicMint
                  provider={web3Provider}
                  claimingAddress={currentAccount}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mint;
