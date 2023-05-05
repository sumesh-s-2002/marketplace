import { useWeb3Context } from "components/web3"
import Link from "next/link"
export default function NavBar(){
    const {connect, web3Loaded, is_loading, hooks, contract}  = useWeb3Context();
    const {account} = hooks.useAccount();
    console.log(contract)
    return(
        <nav className="navigation">
            <div className="nav-wrapper">
                <div className="links-group">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/">
                        MarketPlace
                    </Link>
                    <Link href="/myprojects">
                        My projects
                    </Link>
                </div>
                <div className="button-group">
                    <button className="btn solid">
                        <i className="fa-solid fa-plus"></i><Link
                            href="/addProject"
                        >project
                        </Link>
                    </button>
                    {is_loading ? 
                        <button 
                            className="btn solid"
                            disable = {true}
                            ><i className="fa-brands fa-ethereum"></i> Loading
                        </button>: web3Loaded ? 
                        account?
                        <button 
                            className="btn solid"
                            ><i className="fa-brands fa-ethereum"></i> Hi Welcome
                        </button> :<button 
                            className="btn solid"
                            onClick={connect}
                            ><i className="fa-brands fa-ethereum"></i> Connect
                        </button>: 
                        <button 
                            onClick={()=>window.open("https://www.metamask.io/downloads", "_blank")}
                            className="btn solid"
                            ><i className="fa-brands fa-ethereum"></i> install Metamask
                        </button>
                    }
                </div>
            </div>
        </nav>
    )
}