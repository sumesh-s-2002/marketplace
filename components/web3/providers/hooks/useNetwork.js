import { useState, useEffect } from "react";
//available networks
const NETWORKS = {
    1  : "Ethereum Mainnet",
    5 : "Goerli test Network", 
    11155111 : "Sepolia Test Network",
    59140 : "Linea Goerli Test Network",
    1337 : "Ganache"
} 

const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID];

export const useNetwork = (web3)=>()=>{
    const [network, setNetwork] = useState(null);
    //use effect function for getting current network
    useEffect(()=>{
        const getNetwork = async()=>{
            const chainId = await web3.eth.getChainId();
            setNetwork(NETWORKS[chainId]);
        }
        web3&&getNetwork();
    },[web3])

    useEffect(()=>{
        window.ethereum &&
        window.ethereum.on("chainChanged", (chainId)=>{
            const intChainId = parseInt(chainId, 16);
            setNetwork(NETWORKS[intChainId]);
        })
    },)

    return {
        data : {
            currentNetwork : network,
            targetNetwork : targetNetwork,
            is_loading : !network,
            is_supported : network === targetNetwork
        }
    }
}