import { profileData } from "../../data/profileData";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__intro">
          <div className="about__intro-wrapper">
            <code>&lt;span&gt;</code>
              <span>Oiê, sou a {profileData.name} 👋</span>
            <code>&lt;/span&gt;</code>
          </div>
          <h1><span className="badge">Freelancer</span> <span className="highlight">&#123; {profileData.job} &#125;</span> &amp; {profileData.services[1]}</h1>
          <code>&lt;p&gt;</code>
            <p>Especializada na criação de interfaces digitais, com foco em desenvolver soluções eficientes e visualmente impactantes. Possuo experiência nas principais tecnologias do mercado, como <span className="highlight">HTML5, CSS3, JavaScript, React e WordPress.</span>
            </p>
          <code>&lt;/p&gt;</code>
      </div>
      <div className="about__image">
        <img src={profileData.photo} alt={`Foto de perfil da ${profileData.name}`}loading="lazy" />
      </div>
    </section>
  )
}

export default About;