import { useEffect, useState } from "react"
import { useAccount } from "./useAccount"
import { useNetwork } from "./useNetwork"
import { usePrice } from "components/web3/usePrice"
usePrice
export const setupHooks = (web3)=>{
    return {
        useAccount : useAccount(web3),
        useNetwork : useNetwork(web3),
        usePrice : usePrice()
    }
}