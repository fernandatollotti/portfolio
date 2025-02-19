import NavButton from "../NavButton/NavButton";
import { NavLink } from "react-router-dom";
import { User, Briefcase, Package, SquaresFour, Shapes } from "@phosphor-icons/react";
import "./Menu.css";

function Menu() {
  return (
    <ul className="menu">
      <li className="button__group-item">
        <NavLink to="/" activeClassName="active">
          <NavButton className="button-group__link" activeClassName="active">
            <User size={24} />
          </NavButton>
        </NavLink>
        <span className="tooltip">Sobre</span>
      </li>
      <li className="button__group-item">
        <NavLink to="/curriculo">
          <NavButton className="button-group__link">
            <Briefcase size={24} />
          </NavButton>
        </NavLink>
        <span className="tooltip">Currículo</span>
      </li>
      <li className="button__group-item">
        <NavLink to="/servicos">
          <NavButton className="button-group__link">
            <Package size={24} />
          </NavButton>
        </NavLink>
        <span className="tooltip">Serviços</span>
      </li>
      <li className="button__group-item">
        <NavLink to="/projetos">
          <NavButton className="button-group__link">
            <SquaresFour size={24} />
          </NavButton>
        </NavLink>
        <span className="tooltip">Projetos</span>
      </li>
      <li className="button__group-item">
        <NavLink to="/habilidades">
          <NavButton className="button-group__link">
            <Shapes size={24} />
          </NavButton>
        </NavLink>
        <span className="tooltip">Habilidades</span>
      </li>
    </ul>
  )
}

export default Menu;