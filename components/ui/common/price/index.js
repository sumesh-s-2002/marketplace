import { useWeb3Context } from "components/web3";
import Image from "next/image";
useWeb3Context
export default function Price(){
    const {hooks} = useWeb3Context();
    const {currentPrice} = hooks.usePrice();
    return(
        <section class="currency-section">
            <div class="currency-section-wrapper">
                <div class="currency-card">
                    <div class="currency-wrapper additional">
                        <span class="left-hand">   
                            <Image 
                                src="/eth_small.png"
                                height="20"
                                width = "20"
                            />    
                        </span>
                        <span class="right-hand">= ${currentPrice}</span>
                    </div>
                    <span class="current">current Eth price</span>
                </div>
                <div class="currency-card">
                    <div class="currency-wrapper">
                        <span class="left-hand"><bold class="carbo">CARBO</bold></span>
                        <span class="right-hand">= 0003 <i class="fa-brands fa-ethereum"></i></span>
                    </div>
                    <span class="current">Price per carbo</span>
                </div>
            </div>
        </section>
    )
}