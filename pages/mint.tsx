import { ethers } from "ethers";

import React from "react";


import MintCounter from "../components/Mint/MintCounter";
import { ABI, CONTRACT_ADDRESS } from "../contract";


type AppState = {
  loading:boolean,
  chainId:string,
  totalSupply:number,
  maxSupply:number,
  cost:number,
  balanceOfUser: number
}


const Mint = () => {
  const INITIAL_STATE:AppState = {
    loading:false,
    chainId:'',
    totalSupply:0,
    maxSupply:5555,
    cost:0.01,
    balanceOfUser:0,

  }
  const [currentAccount,setCurrentAccount] = React.useState<string>('');
  const [state,setState] = React.useState<AppState>(INITIAL_STATE);
  const [provider,setProvider] = React.useState();
  const [signer,setSigner] = React.useState();
  const [mintQuantity,setMintQuantity] = React.useState<1|2|3|4|5>(1);
  const getTotalSupply = async(contract):Promise<void> => {
    try{
      const _totalSupply = await contract.totalSupply();
      setState({...state,totalSupply:_totalSupply.toNumber()});
    } catch(err) {
      console.error(err);
    }
  }
  const getMaxSupply = async(contract):Promise<void> => {
    try{
      const _maxSupply = await contract.maxSupply();
      setState({...state,maxSupply:_maxSupply.toNumber()});
    } catch(err) {
      console.error(err);
    }
  }
  const getMintCost = async(contract):Promise<void> => {
    try{
      const _cost = await contract.maxSupply();
      setState({...state,cost:_cost.toNumber()});
    } catch(err) {
      console.error(err);
    }
  }
  const getBalanceOfUser = async(contract):Promise<void> => {
    try{
      const _balanceOf = await contract.balanceOf(currentAccount);
      setState({...state,balanceOfUser:_balanceOf.toNumber()});
    } catch(err) {
      console.error(err);
    }
  }

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
    } catch(error) {
      console.error(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum }: any = window;
    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
    //Check if we are authoriszed to access the user's wallet
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
    //Check users chain ID
    const _chainId = await ethereum.request({ method: "eth_chainId" });
    setState({...state,chainId:_chainId})
    ethereum.on('disconnect', ()=>{
      // setCurrentAccount('');
      window.location.reload();
    });
    ethereum.on("chainChanged", (chainId)=> {
      if(chainId != "0x4"){
        switchNetwork();
      }
    });
    ethereum.on('accountsChanged', (accounts) => {
    
      window.location.reload();
    });
  };

  const mint = async () => {
    try{
      const {ethereum}:any = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,signer);
      const tx = await contract.mint(mintQuantity,{value:ethers.utils.parseEther(state.cost.toString())});
      await tx.wait();
      console.log("Check on etherscan : https://rinkeby.etherscan.io/tx/" + tx.hash );
    } catch(err) {
      console.error(err);
    }
  }

  const fetchContractData = () => {
    const {ethereum}:any = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,signer);
    getTotalSupply(contract);
    getMaxSupply(contract);
    getBalanceOfUser(contract);
    getMintCost(contract);
  }
  const switchNetwork = async () => {
    const {ethereum}:any = window
    if (ethereum) {
      try {
        // Try to switch to the Mumbai testnet
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x4" }], // Check networks.js for hexadecimal network ids
        });
      } catch (error) {
        // This error code means that the chain we want has not been added to MetaMask
        // In this case we ask the user to add it to their MetaMask
        alert("Connect to Rinkeby Testnet")
        console.log(error);
      }
    } else {
      // If ethereum is not found then MetaMask is not installed
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
      );
    }
  };

  React.useEffect(() => {
    checkIfWalletIsConnected();
    
  }, [currentAccount]);

  return (
    <div className="flex flex-col max-w-screen-sm mx-auto min-h-screen items-center justify-center">
      <h1 className="text-6xl  font-bold text-center font-display bg-gradient-to-r from-orange-500 text-transparent bg-clip-text  via-pink-500 to-violet-500">
        Klass NFT
      </h1>
      <button className="w-full max-w-md mt-4" onClick={connectWallet}>
        {currentAccount ? currentAccount : "Connect To Metamask Wallet"}
      </button>
     
      { currentAccount && (
      <div className="flex flex-col gap-4 w-full justify-center items-center mt-4">
      <div className="bg-slate-900 bg-opacity-50  w-full max-w-md  p-4 items-center rounded-2xl">
        <div className="flex my-4 divide-x-2 font-display divide-slate-600 justify-around items-center mt-2">
          <div className="w-full p-4 text-slate-300 grid place-items-center">
            Total Supply
            <p className="font-bold text-3xl text-white">
              {state.totalSupply} / 5555
            </p>
          </div>
          <div className="w-full p-4 text-slate-300 grid place-items-center">
            You own
            <p className="font-bold text-3xl text-white">{currentAccount ? state.balanceOfUser : <span className="text-sm">Connect Wallet</span>}</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 bg-opacity-50  w-full max-w-md  p-4 items-center rounded-2xl">
        <div className="flex my-4 divide-x-2 divide-slate-600 justify-around items-center mt-2">
          <MintCounter count={mintQuantity} setCount={setMintQuantity} />
          <div className="w-full p-4 text-center text-xm mb-2  text-slate-300 font-display">
            Total Price
            <p className="relative top-2 text-white select-none font-bold text-2xl">
              {state.cost * mintQuantity} ETH
            </p>
          </div>
        </div>
        <button onClick={mint} className="w-full px-8 tracking-wider">
          Mint
        </button>
      </div>
      </div>)}
      <div className="absolute bottom-0 p-1 font-display italic">
        ** Under Development , Please only to Rinkeby TestNet **
      </div>
    </div>
  );
};

export default Mint;
