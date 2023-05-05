
const ProjectCard = ({image_url, project_topic, project_title, project_desc}) => {
  return (
    <div className="project-card">
        <div className="image-container">
            <img src="/hellow.jpg" className="fit"/>
        </div>
        <div className="details-card">
            <span className="project-card-topic">{project_topic}</span>
            <span className="project-card-title">{project_title}</span>
            <span className="project-card-desc">{project_desc}</span>
        </div>
    </div>
  )
}

export default ProjectCard
