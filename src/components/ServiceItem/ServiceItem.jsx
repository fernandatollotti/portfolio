import { serviceData } from "../../data/serviceData";
import "./ServiceItem.css";

function ServiceItem() {
  return (
    <>
    {serviceData.map(service => (
      <article key={service.key} className="service__item">
        <div className="service__item-wrapper">
          <figure className="service__image">
            <img src={service.image} alt={service.altText} loading="lazy" />
          </figure>
          <div className="service__content">
            <span className="service__point"></span>
            <div className="tooltip">
              {service.description}
            </div>
            <h4 className="service__title">{service.title}</h4>
          </div>
        </div>
      </article>
    ))}
    </>
  )
}

export default ServiceItem;