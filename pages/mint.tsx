import { ethers } from "ethers";
import Head from "next/head";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import ConnectWallet from "../components/Mint/ConnectWallet";
import FreeMint from "../components/Mint/FreeMint";
import PublicMint from "../components/Mint/PublicMint";

const provider = new ethers.providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_ALCHEMY_URL
);

enum SALE_TYPE {
  FREE,
  PUBLIC,
}


const Mint = () => {
  const [currentAccount, setCurrentAccount] = React.useState<string>("");
  const [mintQuantity, setMintQuantity] = React.useState<1 | 2 | 3 | 4 | 5>(1);
  const [network, setNetwork] = React.useState()
  return (
    <>
      <Head>
        <title>Klass | Mint Page</title>
      </Head>
      <div className="bg-slate-800 p-4 h-screen w-full flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center h-full  max-w-4xl">
          <div className="relative">
            <h1 className="select-none text-5xl md:text-6xl cursor-pointer whitespace-nowrap font-display drop-shadow-lg brightness-110 italic  -top-1 relative   font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-600 via-fuchsia-600 to-pink-400 ">
              Klassic Mint
            </h1>
            <h1 className="select-none text-5xl md:text-6xl whitespace-nowrap absolute top-0  font-display italic blur-2xl  font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-500 via-fuchsia-600 to-pink-400 ">
              Klassic Mint
            </h1>
          </div>
          {network && (
            <div className=" font-medium py-1 w-full rounded-lg text-center bg-slate-700 text-slate-200 font-display">
              {network}
            </div>
          )}
          {/* <ConnectWallet setProvider={} setCurrentAccount={setCurrentAccount} setNetwork={setNetwork} currentAccount={currentAccount} /> */}
          {currentAccount && <PublicMint claimingAddress={currentAccount} />}
        </div>
      </div>
    </>
  );
};

export default Mint;
