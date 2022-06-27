import React, { useEffect, useState } from "react";
import Head from "next/head";
import toast from "react-hot-toast";
import { NextPage } from "next";
import ImageGallery from "../components/AllFocked/ImageGallery";
import GoldenText from "../components/AllFocked/GoldenText";
import GreenText from "../components/AllFocked/GreenText";
import { InjectedConnector} from "wagmi/connectors/injected" 
import { useAccount, useConnect, useDisconnect } from "wagmi";
type Props = {};

type Count = 1 | 2;

const Allfocked: NextPage = (props: Props) => {
  const [count, setCount] = useState<Count>(1);
  const {data:account } =useAccount();
  const {connect} = useConnect({
    connector: new InjectedConnector()
  })
  const {disconnect} = useDisconnect();
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
        <title>XYZ NFT</title>
      </Head>
      <div className=" text-gray-900 flex-col p-10 bg-gradient-to-t  max-w-screen-xl mx-auto  min-h-screen w-full">
        <div className="flex justify-center">
          <h1 className="text-center text-4xl md:text-6xl cursor-pointer whitespace-nowrap font-sora drop-shadow-lg brightness-110 font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-600 via-fuchsia-600 to-pink-400 ">
            All Focked !!
          </h1>
        </div>
        {/* Roadmap */}
        <div className="flex justify-around flex-wrap mt-16 gap-8">
          <ImageGallery />
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl mb-8 leading-tight font-sora font-bold text-gray-300">
              Here is your chance to join the <br />
              <GoldenText> NFT community </GoldenText>,
              <GreenText>
                pay absolutely nothing to mint except gas fees
              </GreenText>
              for your transaction.
            </h2>
            <div>
          {!account && <button onClick={() => connect()} className="bg-gradient-to-r shadow-lg  from-purple-600 via-fuchsia-600 to-pink-500 hover:-translate-y-1 active:translate-y-0 hover:shadow-xl duration-200 rounded-2xl font-sora font-medium text-white px-6 py-3">Connect Wallet </button>}
            {account && <div className="bg-sky-400 text-sm bg-opacity-20 text-sky-50 border-sky-400 border-2 rounded-xl p-2 px-4 font-medium font-sora">Connected to : <span className="font-light"> {account?.address} </span> | {}</div>}
           {account && <button className="bg-gradient-to-r shadow-lg mt-4  from-purple-600 via-fuchsia-600 to-pink-500 hover:-translate-y-1 active:translate-y-0 hover:shadow-xl duration-200 rounded-2xl font-sora font-medium text-white px-6 py-3" onClick={mint}>Mint Free NFT</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allfocked;
