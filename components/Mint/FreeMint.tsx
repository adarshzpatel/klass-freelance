import { Contract, ethers } from 'ethers'
import { id, keccak256 } from 'ethers/lib/utils'
import MerkleTree from 'merkletreejs'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ABI, CONTRACT_ADDRESS } from '../../contract'
import Spinner from '../Spinner'
import MintCounter from './MintCounter'

type Props = {
  claimingAddress:string
}

const createMerkleTree = (whitelistAddresses) => {
  const leaves = whitelistAddresses.map(x=>keccak256(x));
  const merkleTree = new MerkleTree(leaves,keccak256,{sortPairs:true});
  return merkleTree; 
}

const FreeMint = ({claimingAddress}: Props) => {
  const [isWhitelisted,setIsWhitelisted] = useState<boolean>(false);
  const [merkleTree,setMerkleTree] = useState<MerkleTree>();
  const [merkleRoot,setMerkleRoot] = useState<string>('');
  const [merkleProof,setMerkleProof] = useState<any>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [txHash,setTxHash] = useState<string>("");
  const [hasClaimed,setHasClaimed] = useState<boolean>(true);

  const checkIfUserHasAlreadyMinted = async () => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_URL);
    const klassContract = new Contract(CONTRACT_ADDRESS,ABI,provider);
    const _hasClaimed = await klassContract.freeMintClaimed(claimingAddress);
    console.log(_hasClaimed);
    setHasClaimed(_hasClaimed);
  }
  
  const verify = async () => {
    try{
      const whitelistAddresses = [
        '0xAF1cB165fC9e95769292f6af8b106395f346bb77',
        '0xC36De947c7E8fF70721c2a4A70643106e0A103D5',
        ]
    
      const merkleTree = createMerkleTree(whitelistAddresses);
      setMerkleTree(merkleTree);
      const merkleRoot =await merkleTree.getHexRoot();
      setMerkleRoot(merkleRoot);
      const claimProof =await merkleTree.getHexProof(keccak256(claimingAddress));
      setMerkleProof(claimProof);
      const whitelisted =await merkleTree.verify(claimProof,keccak256(claimingAddress),merkleRoot);
      setIsWhitelisted(whitelisted);
      
    } catch(err) {
      console.error(err);
    }
  }

  const freeMint = async () => {
    try{
      const {ethereum}:any = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const klassContract = new Contract(CONTRACT_ADDRESS,ABI,signer);
      const freeMintTx = await klassContract.freeMint(merkleProof,{value:0});
      setLoading(true);
      setTxHash(freeMintTx.hash);
      await freeMintTx.wait();
      setLoading(false);
      console.log(freeMintTx);
      toast("NFT Minted successfully.");
    }catch(err){
      console.log(err);
      toast.error(err.message);
    }
  } 

  useEffect(() => {
    if(claimingAddress){
      verify();
      checkIfUserHasAlreadyMinted();
    }
  }, [claimingAddress])
  
  if(hasClaimed){
    return (
      <div>You have already claimed your free mint, wait for presale to mint more!</div>
    )
  }

  if(!isWhitelisted){
    return (
      <div>Oops! You are not whitelisted , please wait for public mint </div>
    )
  }

  if(!hasClaimed && isWhitelisted){

    return (
      <div className='flex flex-col gap-4'>
      <div className='bg-slate-900 rounded-xl grid grid-cols-2 divide-x divide-gray-600 py-6 px-3 md:px-6'>
        <div className=' flex flex-col font-display items-center justify-center'>
          <p className='text-sm md:text-base text-gray-400'>Total Supply</p>
          <p className='text-xl md:text-3xl font-bold whitespace-nowrap'>5555</p>
        </div>
        <div className='flex flex-col font-display items-center justify-center'>
          <p className='text-sm md:text-base text-gray-400'>Sale Status</p>
            <p className='text-xl md:text-3xl font-bold'>Presale</p>
        </div>
      </div>
      <div className='bg-slate-900 grid grid-cols-2  rounded-xl divide-x divide-gray-600 py-6 px-3 md:px-6'>
        <div className=' flex flex-col font-display items-center justify-center'>
          <p className='text-sm md:text-base text-gray-400'>Mint Quantity</p>
          <p className='text-xl md:text-3xl font-bold whitespace-nowrap'>1</p>
        </div>
        <div className='w- flex flex-col font-display items-center justify-center'>
          <p className='text-sm md:text-base text-gray-400'>Mint Cost</p>
          <p className='text-xl md:text-3xl font-bold'>FREE</p>
        </div>
       { <button disabled={loading} onClick={freeMint} className="w-full mt-4 col-span-2 font-medium tracking-wide font-body text-base md:text-lg">{loading ? "Minting NFT...." : "Mint"} </button>}
        {txHash && <p>View Transaction on etherscan </p>}
      </div> 
      <p className='text-gray-400'> Presale is only for whitelisted addresses , 1 free mint per address </p>
    </div>
  )
}

return (
  <Spinner />
)
}

export default FreeMint