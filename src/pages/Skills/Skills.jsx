import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { skillData } from "../../data/skillData";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <SectionHeader>
        <p className="section-header__label">&#123; Habilidades &#125;</p>
        <h2 className="section-header__heading">Minhas <span className="highlight">ferramentas</span> de especialidade</h2>
      </SectionHeader>
      <div className="skills__container">
        <div className="skills__category">
          {skillData.map((skillCategory)  => (
            <div className="skills__content" key={skillCategory.skillKey}>
              <p className="skills__category-title">
                <strong>{skillCategory.label}: </strong>
              </p>
              <p className="skills__list">
                {skillCategory.listTools.map(tool => tool.label).join(", ")}
              </p>
            </div>
          ))}
        </div>

        <div className="skills__tools">
          <ul className="skills__cards">
          {skillData.map(skillCategory => (
              skillCategory.listTools.map(tool => (
                <li className="skills__item" key={tool.key}>
                  {tool.icon && (
                    <img src={tool.icon} alt={tool.imageAlt || "Ícone"} loading="lazy" />
                  )}
                  {tool.label && (
                    <span className="skills__label">{tool.label}</span>
                  )}
                </li>
              ))
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;
