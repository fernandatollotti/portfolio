import NavButton from "../NavButton/NavButton";
import { NavLink } from "react-router-dom";
import { User, Briefcase, Package, SquaresFour, Shapes } from "@phosphor-icons/react";
import "./Menu.css";

function Menu() {
  return (
    <ul className="menu">
      <li className="button-group__item">
        <NavLink to="/" className="button-group__link" activeClassName="active">
          <User size={24} />
        </NavLink>
        <span className="tooltip">Sobre</span>
      </li>
      <li className="button-group__item" >
        <NavLink to="/curriculo" className="button-group__link">
          <Briefcase size={24} />
        </NavLink>
        <span className="tooltip">Currículo</span>
      </li>
      <li className="button-group__item">
        <NavLink to="/servicos" className="button-group__link">
          <Package size={24} />
        </NavLink>
        <span className="tooltip">Serviços</span>
      </li>
      <li className="button-group__item">
        <NavLink to="/projetos" className="button-group__link">
          <SquaresFour size={24} />
        </NavLink>
        <span className="tooltip">Projetos</span>
      </li>
      <li className="button-group__item">
        <NavLink to="/habilidades" className="button-group__link">
          <Shapes size={24} />
        </NavLink>
        <span className="tooltip">Habilidades</span>
      </li>
    </ul>
  )
}

export default Menu;