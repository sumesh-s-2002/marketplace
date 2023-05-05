import { useWeb3Context } from "components/web3";
export default function Hero(){
    const {hooks} = useWeb3Context();
    const {account} = hooks.useAccount();
    const {data} = hooks.useNetwork(); 
    return(
        <section className="hero-section">
            <div className="hero-wrapper">
                <div className="left">
                    <div className="welcome">
                        <small className="message">Hello Welcome</small>
                        <span className="address">{account}</span>
                    </div>
                    <button className="btn solid learnmore">Learn More</button>
                </div>
                {data.is_loading? 
                    <div className="right">
                        <span>currently on : Fetching...<bold class="network"></bold></span>
                    </div> :
                    data.is_supported ? 
                    <div className="right">
                        <span>currently on : {data.currentNetwork}<bold class="network"></bold></span>
                    </div> :
                    <div className="right red">
                        <span>currently on : {data.currentNetwork} - 
                        expected : {data.targetNetwork}
                        <bold class="network"></bold></span>
                    </div>
                }
            </div>
        </section>
    )
}