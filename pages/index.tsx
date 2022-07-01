import React, { useEffect, useState } from "react";
import Head from "next/head";
import toast from "react-hot-toast";
import { NextPage } from "next";
import ImageGallery from "../components/AllFocked/ImageGallery";
import GoldenText from "../components/AllFocked/GoldenText";
import GreenText from "../components/AllFocked/GreenText";
import { InjectedConnector } from "wagmi/connectors/injected";
import { SparklesIcon } from "@heroicons/react/solid";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ChevronDownIcon } from "@heroicons/react/outline";
import TwitterIcon from "../components/Icons/Twitter";
import OpenSeaIcon from "../components/Icons/OpenSea";
type Props = {};

type Count = 1 | 2;

const SocialMediaLinks = () => (
  <div className="flex gap-4 items-center">
    <div className="flex items-center gap-4">
      <a
        href="https://twitter.com/Allfocked"
        target="_blank"
        rel="noreferrer"
        className="flex items-center md:text-xl gap-4 hover:bg-white/10 p-2 px-4 rounded-xl"
      >
        <TwitterIcon className="stroke-white fill-current" /> Twitter
      </a>
    </div>
    <div>
      <a
        href="opensea_link_here"
        target="_blank"
        rel="noreferrer"
        className="flex items-center md:text-xl gap-4 hover:bg-white/10 p-2 px-4 rounded-xl"
      >
        <OpenSeaIcon className="stroke-white fill-current" /> OpenSea
      </a>
    </div>
  </div>
);

const Allfocked: NextPage = (props: Props) => {
  const [count, setCount] = useState<Count>(1);
  const { data: account } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const incrementTo2 = () => {
    if (count === 1) {
      setCount(2);
    } else {
      toast("You can only mint 2 per wallet");
    }
  };

  const decrementTo1 = () => {
    if (count === 2) {
      setCount(1);
    }
  };

  const mint = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>All Focked NFTs</title>
      </Head>
      <main>
        <section className=" flex-col p-4 md:p-10 bg-gradient-to-t  max-w-screen-xl mx-auto  min-h-screen w-full relative">
          <div className="flex justify-center">
            <h1 className="text-center text-4xl md:text-6xl cursor-pointer whitespace-nowrap font-sora drop-shadow-lg brightness-110 font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-600 via-fuchsia-600 to-pink-400 ">
              All Focked !!
            </h1>
          </div>
          {/* Roadmap */}
          <div className="flex justify-around flex-wrap mt-16 gap-8">
            <ImageGallery />
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-4xl mb-8 pl-4 leading-tight font-sora font-bold text-gray-300">
                Here is your chance to begin your <br />
                <GoldenText> NFT journey and pump your bags , </GoldenText>
                <GreenText>
                  pay absolutely nothing to mint except gas fees
                </GreenText>
                 {" "}for your transaction.
              </h2>
              <div className="mb-4 p-4">
                {!account && (
                  <button
                    onClick={() => connect()}
                    className="bg-gradient-to-r shadow-lg  from-purple-600 via-fuchsia-600 to-pink-500 hover:-translate-y-1 active:translate-y-0 hover:shadow-xl duration-200 rounded-2xl font-sora font-medium text-white px-6 py-3"
                  >
                    Connect Wallet{" "}
                  </button>
                )}
                {account && (
                  <div className="bg-sky-400 text-sm bg-opacity-20 text-sky-50 border-sky-400 border-2 rounded-xl p-2 px-4 font-medium font-sora">
                    Connected to :{" "}
                    <span className="font-light text-xs md:text-base"> {account?.address} </span> 
                  </div>
                )}
                {account && (
                  <button
                    className="bg-gradient-to-r shadow-lg mt-4  from-purple-600 via-fuchsia-600 to-pink-500 hover:-translate-y-1 active:translate-y-0 hover:shadow-xl duration-200 rounded-2xl font-sora font-medium text-white px-6 py-3"
                    onClick={mint}
                  >
                    Mint Free NFT
                  </button>
                )}
              </div>
              <div className="pl-4">

         <hr  className="border-gray-500 mb-4"/>
                <SocialMediaLinks />
              </div>
           
            </div>
          </div>
          <div className="hidden md:flex justify-center w-full absolute bottom-16">
            <ChevronDownIcon className="h-8 w-8 text-white absolute  mx-auto animate-bounce  " />
          </div>
        </section>

        <section className="p-4 md:p-10 text-gray-100 flex-col bg-gradient-to-t space-y-4  max-w-screen-xl mx-auto w-full">
          <h2 className="text-4xl mb-8 leading-tight font-sora font-bold text-gray-300">
            About
          </h2>
          <div className="flex items-center gap-4  md:text-2xl font-medium">
            <SparklesIcon className="h-6 w-6 text-amber-400" />2 free mints per
            wallet. ( pay only gas fees )
          </div>
          <div className="flex items-center gap-4 md:text-2xl font-medium">
            <SparklesIcon className="h-6 w-6 text-amber-400" />
            4400 open for free mint , 44 reserved.
          </div>
          <div className="flex items-center gap-4 nd:text-2xl font-medium">
            <SparklesIcon className="h-6 w-6 text-amber-400" />
            No discord, No utility and definitely no FOCKED up roadmap
          </div>
          <div className="flex items-center gap-4 md:text-2xl font-medium">
            <SparklesIcon className="h-6 w-6 text-amber-400" />
            ERC721A Contract , optimized for minimal gas fees .
          </div>
        </section>
        <footer className=" text-gray-100 border-t border-gray-500 md:text-2xl font-medium flex justify-between p-4   max-w-screen-xl mx-auto w-full">
          <p className="flex-1">All Focked</p>
          <SocialMediaLinks />
        </footer>
      </main>
    </>
  );
};

export default Allfocked;
