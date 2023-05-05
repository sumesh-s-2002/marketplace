const { createContext, useContext, useEffect, useState, useMemo } = require("react");
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { setupHooks } from "./hooks/setupHooks";
import MarketPlace from "contract/build/MarketPlace.json"


const web3Context = createContext(null);
//creating and exporting web3context
export default function Web3Provider({children}){
    const [webApi, setWebApi] = useState({provider : null,web3 : null,contract : null,is_loading : true});
    //load provoder when all componets are loaded
    useEffect(()=>{
        const loadProvider = async()=>{
        const provider = await detectEthereumProvider();
            if(provider){
                const web3 = new Web3(provider);
                setWebApi({
                    provider : provider,
                    web3: web3,
                    contract : null,
                    is_loading : false,
                    projects : null,
                });
            }else{
                setWebApi(api =>({...api, is_loading : true}))
            }
        }
        loadProvider();
    }, [])
    //load contract when web3 i loaded
    useEffect(()=>{
        const loadContract = async ()=>{
            try{
                const contarctInstance = new webApi.web3.eth.Contract(MarketPlace.abi, "0x1407BFaC05E97899FB3Bed81F778E5b51c054ba6")
                const data =  await contarctInstance.methods.getAllProjects().call();
                console.log(data)
                setWebApi({...webApi, contract : contarctInstance, projects : data});
            }catch(e){
                console.error(e.message);
            }
        }
        webApi.web3 && loadContract();
    }, [webApi.web3])
    //use effects ends
    //adding additional functionalities to webApi object
    const _webApi = useMemo(()=>{
        return{
            ...webApi,
            web3Loaded : !webApi.is_loading && webApi.web3,
            hooks : setupHooks(webApi.web3),
            connect : webApi.provider ? async()=>{
                try{
                    await _webApi.provider.request({method : "eth_requestAccounts"});
                }catch{
                    window.location.reload()
                    console.error("cannot connect to metamask");
                }
            } : ()=>{
                console.error("unable to load the provider");
            },
        }   
    }, [webApi])
 
    return(
        <web3Context.Provider value = {_webApi}>
            {children}
        </web3Context.Provider>
    )
}

//function to use web3 context
export function useWeb3Context(){
    return useContext(web3Context);
}