import { BaseLayout } from "components/ui/Layout";
import { ProjectCard, ContentTitle, FormFlex } from "components/ui/dynamic";
import { InfoCard } from "components/ui/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllProjects } from "utils/getAllProjects";

// export const getStaticPaths = ()=>{
//     const projects = [];
//     const paths = projects.map((project, i)=> ({
//         params : {
//             slug : i
//         }
//     }))
//     return {
//         paths,               //[{ params: { id: '1' } }, { params: { id: '2' } }],
//         fallback: false, // can also be true or 'blocking'
//     }
// }


export default function ProjectDetails(){
    // const router = useRouter();
    // const [project, setProject] = useState(null);
    // useEffect(()=>{
    //     if(!router.isReady) return
    //         const {slug} = router.query;
    //         const loadProjects = async()=>{
    //             const projects  = await getAllProjects();
    //             projects.map((project, i)=>{
    //                 if(i == slug){
    //                     setProject(project)
    //                 }
    //             })
    //         }
    //     loadProjects();
    // },[router.isReady,project])
    // return(
    //     <>  
    //         {project ? <ProjectCard
    //             project_topic={project.project_topic}
    //             project_title={project.project_title}
    //             project_desc={project.project_desc}
    //         /> : <ProjectCard/>}
    //         {project ? <div className="flex-box" >
    //             <InfoCard
    //                 title = "carbon credits"
    //                 data = {project.credit}
    //             />
    //         </div> : <></>}
    //         {project ? 
    //             <FormFlex buyers={project.buyers} project_owner={project.}/>
    //         : <FormFlex/>}        
    //     </>)
    return <></>
}

ProjectDetails.layout = BaseLayout

