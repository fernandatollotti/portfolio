import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <SectionHeader>
        <p className="section-header__label">&#123; Projetos &#125;</p>
        <h2 className="section-header__heading">Explore <span className="highlight">meus projetos</span> mais recentes</h2>
      </SectionHeader>
      <div className="projects__container">
        <ProjectCard />
      </div>
    </section>
  )
}

export default Projects;