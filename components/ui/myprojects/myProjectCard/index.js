import { Button } from "components/ui/common"

const MyProjectCard = ({topic, title, desc, credits}) => {
  return (
    <div className="my-project-card">
        <div className="my-project-card-top">
            <div className="field">
                <span className="card-title">project Topic</span>
                <span className="card-content">Solar</span>
            </div>
            <div className="field">
                <span className="card-title">project Title</span>
                <span className="card-content">hellow this is title</span>
            </div>
            <div className="field">
                <span className="card-title">project descrption</span>
                <span className="card-content" style={{width : "70%"}}>hellow this is description</span>
            </div>
            <div className="field">
                <span className="card-title">Credits</span>
                <span className="card-content">50</span>
            </div>
        </div>
        <div className="button-group" style={{marginTop : "20px"}}>
            <Button classNames="btn solid"
            text= "Add To Market"
            handler={()=>{console.log("hellow world Market")}}/>
            <Button classNames="btn solid"
            text= "Burn Token"
            handler={()=>{console.log("hellow world Burned")}}/>
        </div>
    </div>
  )
}

export default MyProjectCard
