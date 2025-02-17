import "./EducationSection.css";

function EducationSection({title, icon: Icon, category, data}) {
  return (
    <div className="education">
      <h3><Icon size={24} /> {title}</h3>
      <div className="education__cards-container">
        {data.filter(item => item.key === category)
        .reverse()
        .map(education => (
          <article key={education.name} className="education__card">
             <header className="card__header">
                <h4 className="card__title text-gradient">{education.name}</h4>
                <span className="card__info">
                  {education.date} | {education.local}
                </span>
              </header>
              <p className="card__content">{education.content}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default EducationSection;