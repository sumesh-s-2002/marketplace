import { useEffect, useState } from "react";
import Web3 from "web3";
import MarketPlace from "contract/build/MarketPlace.json"
import { useWeb3Context } from "components/web3";

export async function getAllProjects(){ 
    const {hooks} = useWeb3Context();
    const {account} = hooks.useAccount();
    console.log(account)
    //usestate to keep track of project state
    var projects = [];
    const provider = window.ethereum;
    const web3 = new Web3(provider);
    const contarctInstance = new web3.eth.Contract(MarketPlace.abi, "0xCA4257bFcebD73dD5CE34a77799e7804E2Aa947d");
    const response = await contarctInstance.methods.getAllMyProjects().call({from :account});
    const validres = response ? response : [];
    projects = validres.map((project,)=>({
        image_url : project[4],
        project_topic : project[1],
        project_title : project[2],
        project_desc : project[3],
        credit : project[5],
        project_owner : project[0],
        buyers : project[8]
    }))
    console.log(projects);
    return projects;
}
getAllProjects();

