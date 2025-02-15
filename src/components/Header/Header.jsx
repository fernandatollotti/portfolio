import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { profileData } from "../../data/profileData";
// import avatar from "../../assets/avatar.png";
import LinkButton from "../../components/LinkButton/LinkButton";
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header__profile">
        <div className="header__avatar">
          <img className="header__avatar-image" src={profileData.avatar} alt={`Avatar de ${profileData.name}`} loading="lazy" />
        </div>
        <div className="header__details">
          <span className="header__details-name">{profileData.name}</span>
          <p className="header__details-job">{profileData.job}</p>
          <ul className="social-list">
            {profileData.socialsLinks.map((social, index) => (
              <li key={index} className="social-item">
                <LinkButton className="link-button" href={social.url}>
                  {social.icon === 'GithubLogo' &&  <GithubLogo size={32} />}
                  {social.icon === 'LinkedinLogo' &&  <LinkedinLogo size={32} />}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="header__info">
        <ul className="header__info-list">
        <li className="header__info-item">
            <span className="header__info-title">E-mail</span>
            <p className="header__info-text">{profileData.email}</p>
          </li>
          <li className="header__info-item">
            <span className="header__info-title">Serviços</span>
            <p className="header__info-text">{profileData.services.join(" | ")}</p>
          </li>
          <li className="header__info-item">
            <span className="header__info-title">Localização</span>
            <p className="header__info-text">{profileData.location}</p>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;