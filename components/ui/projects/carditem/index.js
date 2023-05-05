import React from 'react'
import Link from 'next/link'

const ProjectCard = ({image_url,
                    project_topic,
                    project_title,
                    project_desc,id})=>{
  return (
    <div>
        <div class="card">
            <div class="card-left">
                <img class="image" src={image_url} alt=""/>
            </div>
            <div class="card-right">
                <div class="card-rihgt-wrapper">
                    <h3 class="project-header">{project_topic}</h3>
                    <Link href={`projects/${id}`}>
                        <p class="project-title">{project_title}</p>
                    </Link>
                    <p class="project-info">{project_desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
