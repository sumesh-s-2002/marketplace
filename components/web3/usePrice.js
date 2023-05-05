import { useEffect, useState } from "react"

export const usePrice = ()=>()=>{
    const [price, setPrice] = useState();
    useEffect(()=>{
        const url = "https://api.coingecko.com/api/v3/coins/ethereum";
        const fetcher = async()=>{
            const res = await fetch(url);
            const jsondata = await res.json();
            const price = jsondata.market_data.current_price.usd;
            setPrice(price);
        }
        fetcher();
    },[])
    return{
        currentPrice : price
    }
}