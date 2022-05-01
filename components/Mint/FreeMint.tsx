import { Contract, ethers, providers } from "ethers";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { OPENSEA_LINK } from "../../constants/social";

import { ABI, CONTRACT_ADDRESS } from "../../contract";
import OpenSeaIcon from "../Icons/OpenSea";
import SocialLink from "../Navbar/SocialLink";

type Props = {
  claimingAddress: string;
  provider: providers.Web3Provider;
};

const FreeMint = ({ claimingAddress, provider }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string>("");
  const [hasClaimed, setHasClaimed] = useState<boolean>(false);

  const checkIfUserHasAlreadyMinted = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_ALCHEMY_URL
    );
    const klassContract = new Contract(CONTRACT_ADDRESS, ABI, provider);
    const _hasClaimed = await klassContract.freeMintClaimed(claimingAddress);
    console.log(_hasClaimed);
    setHasClaimed(_hasClaimed);
  };

  const freeMint = async () => {
    try {
      const signer = provider.getSigner();
      const klassContract = new Contract(CONTRACT_ADDRESS, ABI, signer);
      const freeMintTx = await klassContract.freeMint();
      setLoading(true);
      await freeMintTx.wait();
      setLoading(false);
      console.log(freeMintTx);
      setTxHash(freeMintTx.hash);
      toast("NFT Minted successfully.");
    } catch (err) {
      console.error({ err });
      toast.error(err.error.message);
    }
  };

  useEffect(() => {
    if (claimingAddress) {
      // checkIfUserHasAlreadyMinted();
    }
  }, [claimingAddress]);

  if (hasClaimed) {
    return (
      <div>
        You have already claimed your free mint, wait for presale to mint more!
        <div className="flex mt-4 flex-wrap justify-around">
          <SocialLink
            Icon={OpenSeaIcon}
            link={OPENSEA_LINK}
            text=" View on OpenSea"
          />

          <SocialLink
            link="https://rinkeby.etherscan.io/address/0x949c45049a9cdb33718539638fC867Ea919EB50C"
            text="View on Etherscan"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className="bg-slate-900 rounded-xl grid grid-cols-2 divide-x divide-gray-600 py-6 px-3 md:px-6">
        <div className=" flex flex-col font-display items-center justify-center">
          <p className="text-sm md:text-base text-gray-400">Total Supply</p>
          <p className="text-xl md:text-3xl font-bold whitespace-nowrap">
            5555
          </p>
        </div>
        <div className="flex flex-col font-display items-center justify-center">
          <p className="text-sm md:text-base text-gray-400">Sale Status</p>
          <p className="text-xl md:text-3xl font-bold">Presale</p>
        </div>
      </div>
      <div className="bg-slate-900 grid grid-cols-2  rounded-xl divide-x divide-gray-600 py-6 px-3 md:px-6">
        <div className=" flex flex-col font-display items-center justify-center">
          <p className="text-sm md:text-base text-gray-400">Mint Quantity</p>
          <p className="text-xl md:text-3xl font-bold whitespace-nowrap">1</p>
        </div>
        <div className="w- flex flex-col font-display items-center justify-center">
          <p className="text-sm md:text-base text-gray-400">Mint Cost</p>
          <p className="text-xl md:text-3xl font-bold">FREE</p>
        </div>
        {
          <button
            disabled={loading}
            onClick={freeMint}
            className="w-full mt-4 col-span-2 font-medium tracking-wide font-body text-base md:text-lg"
          >
            {loading ? "Minting NFT...." : "Mint"}{" "}
          </button>
        }
      </div>
     
    </div>
  );
};

export default FreeMint;
