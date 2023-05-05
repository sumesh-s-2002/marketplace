import data from "./data.json";

export default function getallProjects(){
    return{
        data : data,
        dataMap : data.reduce((a, p, i)=>{
            a[p.id] = p;
            a[p.id].index = i;
            return a;
        },{})
    }
}