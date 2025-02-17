import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Tabs from "../../components/Tabs/Tabs";
import Education from "../../components/Education/Education";

function Resume() {
  return (
    <section className="resume">
      <SectionHeader>
        <p className="section-header__label">&#123; Experiência &#125;</p>
        <h2 className="section-header__heading">Com <span className="highlight">3+ anos</span> de experiência, transformo ideias em projetos digitais</h2>
      </SectionHeader>
      <Tabs />
      <Education />
    </section>
  )
}

export default Resume;