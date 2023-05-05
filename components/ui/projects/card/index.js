import { useWeb3Context } from "components/web3";
import { ProjectCard } from "..";

export default function Card(){
    const myprojects = [];
    return(
        myprojects.map((project, index)=>{
            console.log(project)
            return(
                <ProjectCard
                    image_url={project[4]}
                    project_topic={project[1]}
                    project_title={project[2]}
                    project_desc={project[3]}
                    id = {index}    
                />
            )
        })
    )
}