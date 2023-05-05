import { NavBar, Hero, Footer } from "components/ui/common"
import { Web3Provider } from "components/web3"

export default function BaseLayout({children}){
    return(
        <div className="flex-col row">
            <Web3Provider>
                <NavBar/>
                <Hero/>
                {children}
                <Footer/>
            </Web3Provider> 

        </div>
    )
}