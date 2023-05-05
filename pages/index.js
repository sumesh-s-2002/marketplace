import { BaseLayout } from "components/ui/Layout"
import { Price} from "components/ui/common" 
import { Card, Title } from "components/ui/projects"
import { useWeb3Context } from "components/web3";

export default function Home() {
  const {hooks} =  useWeb3Context();
  const {account} = hooks.useAccount()
  return (
    <>  
        <Price/>
        <Title/>
        <section className="grid-section">
          <div className="grid-wrapper">
            <Card/>
          </div>
        </section>
    </>
  )
}
Home.layout = BaseLayout;


