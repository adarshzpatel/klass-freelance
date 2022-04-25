
import { StarIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import React, { useState } from 'react'
import ConnectWallet from '../components/Mint/ConnectWallet'
import FreeMint from '../components/Mint/FreeMint'

type Props = {}

const Presale = (props: Props) => {
  const [currentAccount,setCurrentAccount] = useState<string>("");
  const [network,setNetwork] = useState<string>("");

  
  
  return (
    <>
      <Head>
        <title>Klass | Presale Mint</title>
      </Head>
      <div className="bg-slate-800 p-4 h-screen w-full flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center h-full  max-w-4xl ">
          <div className="relative">
            <h1 className="select-none text-4xl md:text-5xl cursor-pointer whitespace-nowrap font-display drop-shadow-lg brightness-110 italic  -top-1 relative   font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-600 via-fuchsia-600 to-pink-400 ">
              Klassic Presale
            </h1>
            <h1 className="select-none text-4xl md:text-5xl whitespace-nowrap absolute top-0  font-display italic blur-2xl  font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-500 via-fuchsia-600 to-pink-400 ">
              Klassic Presale
            </h1>
          </div>
          <p className='font-medium font-display flex items-center gap-4'><StarIcon className='h-5 w-5 text-yellow-500'/> Free mint to whitelisted addresses <StarIcon className='h-5 w-5 text-yellow-500'/></p>
          {network && (
            <div className=" font-medium py-1 w-full rounded-lg text-center bg-slate-700 text-slate-200 font-display">
              {network}
            </div>
          )}
          <ConnectWallet currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} setNetwork={setNetwork}/>
        {currentAccount && <FreeMint claimingAddress={currentAccount}/>}
        </div>
      </div>
    </>
  )
}

export default Presale