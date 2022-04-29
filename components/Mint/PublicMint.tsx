
import { Contract, ethers } from 'ethers'

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ABI, CONTRACT_ADDRESS } from '../../contract'

import MintCounter from './MintCounter'

type Props = {
  claimingAddress:string
}

const PublicMint = ({claimingAddress}: Props) => {
  const [loading,setLoading] = useState<boolean>(false);
  const [txHash,setTxHash] = useState<string>("");
  const [mintQuantity,setMintQuantity] = useState<number>(1);
  const [mintCost,setMintCost] = useState<number>(0.008);
  const [totalSupply,setTotalSupply] = useState<number>(0);
  
  const getTotalSupply = async () => {
    try{
      const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_URL);
      const klassContract = new Contract(CONTRACT_ADDRESS,ABI,provider);
      const _totalSupply = await klassContract.totalSupply();
      console.log(_totalSupply)
      setTotalSupply(_totalSupply.toString());
    }catch(err){
      console.log(err);
      toast.error(err.message);
    }
  }

  useEffect(()=>{
    getTotalSupply();
  },[]);

  const mint = async () => {
    try{
      const {ethereum}:any = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const klassContract = new Contract(CONTRACT_ADDRESS,ABI,signer);
      const mintTx = await klassContract.mint(mintQuantity,{value:ethers.utils.parseEther((mintQuantity * mintCost).toFixed(4))});
      setLoading(true);
      setTxHash(mintTx.hash);
      await mintTx.wait();
      setLoading(false);
      console.log(mintTx);
      toast("NFT Minted successfully.");
    }catch(err){
      console.log(err);
      toast.error(err.message);
    }
  } 
    return (
      <div className='flex flex-col gap-4'>
      <div className='bg-slate-900 rounded-xl grid grid-cols-2 divide-x divide-gray-600 py-6 px-3 md:px-6'>
        <div className=' flex flex-col font-display items-center justify-center'>
          <p className='text-sm md:text-base text-gray-400'>Total Supply</p>
          <p className='text-xl md:text-3xl font-bold whitespace-nowrap'> {totalSupply} / 5555</p>
        </div>
        <div className='flex flex-col font-display items-center justify-center'>
          <p className='text-sm md:text-base text-gray-400'>Sale Status</p>
            <p className='text-xl md:text-3xl font-bold'>Presale</p>
        </div>
      </div>
      <div className='bg-slate-900 grid grid-cols-2  rounded-xl divide-x divide-gray-600 py-6 px-3 md:px-6'>
        <div className=' flex flex-col font-display items-center justify-center'>
          <p className='text-sm md:text-base text-gray-400'>Mint Quantity</p>
          <div className='text-xl md:text-3xl font-bold whitespace-nowrap'><MintCounter maxLimit={15} count={mintQuantity} setCount={setMintQuantity} /></div>
        </div>
        <div className='w- flex flex-col font-display items-center justify-start'>
          <p className='text-sm md:text-base text-gray-400 mb-4'>Mint Cost</p>
          <p className='text-xl md:text-3xl font-bold'> {(mintQuantity * mintCost).toFixed(4)} ETH </p>
        </div>
       { <button disabled={loading} onClick={mint} className="w-full mt-4 col-span-2 font-medium tracking-wide font-body text-base md:text-lg">{loading ? "Minting NFT...." : "Mint"} </button>}
        {txHash && <p>View Transaction on etherscan </p>}
      </div> 
      <p className='text-gray-400'> Presale is only for whitelisted addresses , 1 free mint per address </p>
    </div>
  )
}

export default PublicMint