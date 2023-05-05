import { Button } from "components/ui/common"
import { ContentTitle } from ".."
const formFlex = ({project_owner, buyers}) => {
  return (
    <div className="form-flex">
        <div className="form-flex-left">
            <ContentTitle title="Project Owner" />
            <span className="address-font">{project_owner}</span>
            <ContentTitle title="Buyers" />
            <span className="address-font">{buyers}</span>
        </div>
        <div className="form-flex-right">
            <div className="flex-form">
                <ContentTitle title="Buy Tokens"/>
                <span className="flex-form-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </span>
                <div className="flex-form-group">
                    <label className="flex-form-lablel">Amount : </label>
                    <input className="flex-form-input" type="number" placeholder="Enter amount in wei"/>
                </div>
                <Button text="BUY CARBO" disabled={false} classNames="btn solid"/>
            </div>
        </div>        
    </div>
  )
}

export default formFlex
