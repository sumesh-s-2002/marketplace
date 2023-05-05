import { useEffect, useState } from "react"

export const useAccount = (web3)=>()=>{
    const [account, setAccount] = useState(null);
    useEffect(()=>{
        const loadAccount = async ()=>{
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        }
        web3 && loadAccount()
    }, [web3])

    useEffect(()=>{
        window.ethereum&&
        window.ethereum.on("accountsChanged", (accounts)=>{
            setAccount(accounts[0]);
        })
    })
    return{
    account : account
    }
}