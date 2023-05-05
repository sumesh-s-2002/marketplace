import { useEffect, useState } from "react"
import { FormField, Status } from ".."
import { Button } from "components/ui/common";
import { useWeb3Context } from "components/web3";

const form = () => {
    //web3 api functions
    const {contract, web3, hooks} = useWeb3Context();
    const {account} = hooks.useAccount();
    //state variable for form data
    const [form, setForm] = useState({
        project_topic : "",
        project_title : "",
        project_description : "",
        image_url : "",
        carbon_credit : "",
        serial_number : ""
    });
    //state variable for tarcking status of the validation
    const [status, setStatus] = useState({status : "", visible : false})
    //validate functionality
    const validate = async (e)=>{
        setStatus({status : "validating", visible : true});
        if(contract){
            await contract.methods.setValidated(form.serial_number).send({from : account});
            setStatus({status : "documents validated", visible : true});
            setStatus({status : "retiring credits", visible : true});
            setStatus({status : "creadits retired", visible : true});
            const id = await contract.methods.addToMyProjects(
            form.project_topic,
            form.project_title,
            form.project_description,
            form.image_url,
            +form.carbon_credit,
            form.serial_number).send({from : account});
            setStatus({status : `project created ${id}`, visible : true});
        } 
    }   

    const onChangeHandler = (fieldName,e)=>{
        setForm({...form, [fieldName] : e.target.value});
    }
    return (
        <div className="form">
            <h1>Add Project</h1>
            <FormField 
                value={form.project_topic}
                handler = {(e)=>{ onChangeHandler('project_topic', e)}}
                type = "text"
                label="project Topic"
                is_textArea={false}
                placeholder="your Topic"
            />
            <FormField 
                value={form.project_title}
                type = "text"
                handler = {(e)=>{ onChangeHandler('project_title', e)}}
                label="project Title"
                is_textArea={false}
                placeholder="your project Title"
            />
            <FormField 
                value={form.project_description}
                label="project description"
                handler = {(e)=>{ onChangeHandler('project_description', e)}}
                type = "text"
                is_textArea={true}
                placeholder="your project description"
            />
            <FormField 
                value={form.image_url}
                label="image url"
                handler = {(e)=>{ onChangeHandler('image_url', e)}}
                is_textArea={false}
                placeholder="www.example.com/images/image.png"
            />
            <FormField 
                value={form.carbon_credit}
                label="carbon credit"
                handler = {(e)=>{ onChangeHandler('carbon_credit', e)}}
                is_textArea={false}
                type = "number"
                placeholder=""
            />
            <FormField 
                value={form.serial_number}
                label="serial Number"
                handler = {(e)=>{ onChangeHandler('serial_number', e)}}
                is_textArea={false}
                type = "text"
                placeholder="serial number"
            />
            <div className="button-group" >
                <Button
                    classNames= "btn solid"
                    text= "validate"
                    disabled= {false}
                    handler={(e)=>{ validate(e)}}
                />
            </div>
            <Status 
                text={status.status}
                classNames="status-bar"
                visible={status.visible}
            />

        </div>
    )
}

export default form
