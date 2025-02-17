import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import "./Services.css";

function Services() {
  return (
    <section className="services">
       <SectionHeader>
        <p className="section-header__label">&#123; Serviços &#125;</p>
        <h2 className="section-header__heading"><span className="highlight">Serviços</span> para transformar seu projeto</h2>
      </SectionHeader>
      <div className="services__list">
        <ServiceItem />
      </div>
    </section>
  )
}

export default Services;