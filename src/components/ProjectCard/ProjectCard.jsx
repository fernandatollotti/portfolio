import { projectData } from "../../data/projectData";
import NavButton from "../NavButton/NavButton";
import "./ProjectCard.css";

function ProjectCard() {
  return (
    <>
    {projectData.map(project => (
      <article className="project__item" key={project.key}>
        <div className="project__image-wrapper">
          <img className="project__image" src={project.imageUrl} alt={project.imageAlt} loading="lazy" />
        </div>
        <div className="project__content">
          <h3 className="project__title highlight">{project.title}</h3>
          <p className="project__description">{project.description}</p>
          <div className="project__details">
            <h4 className="project__details-title">Informações sobre o Projeto {project.name}</h4>
            <dl className="project__list">
              <div className="project__list-item">
                <dt><strong>Cliente</strong></dt>
                <dd>{project.name}</dd>
              </div>
              <div className="project__list-item">
                <dt><strong>Categoria</strong></dt>
                <dd>{project.category}</dd>
              </div>
              <div className="project__list-item">
                <dt><strong>Tempo estimado</strong></dt>
                <dd>{project.estimatedTime}</dd>
              </div>
              <div className="project__list-item">
                <dt><strong>Ferramentas</strong></dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
            </dl>
            <div className="button-group">
              <ul className="button-group__list">
               {project.links.map((link, index) => (
                 <li key={index} className="button-group__item">
                  <NavButton src={link.url} className="button-group__link">{link.label}</NavButton>
                </li>
               ))
               }
              </ul>
            </div>
          </div>
        </div>
    </article>
    ))}
    </>
  )
}

export default ProjectCard;