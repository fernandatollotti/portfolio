import { NavLink } from "react-router-dom";
import { User, Briefcase, Package, SquaresFour, Shapes } from "@phosphor-icons/react";
import "./Menu.css";

function Menu() {
  return (
    <ul className="menu">
      <li className="button-group__item">
        <NavLink to="/" className={({ isActive }) => isActive ? "button-group__link active" : "button-group__link"}>
          <User size={24} />
        </NavLink>
        <span className="tooltip">Sobre</span>
      </li>
      <li className="button-group__item" >
        <NavLink to="/curriculo" className={({ isActive }) => isActive ? "button-group__link active" : "button-group__link"}>
          <Briefcase size={24} />
        </NavLink>
        <span className="tooltip">Currículo</span>
      </li>
      <li className="button-group__item">
        <NavLink to="/servicos" className={({ isActive }) => isActive ? "button-group__link active" : "button-group__link"}>
          <Package size={24} />
        </NavLink>
        <span className="tooltip">Serviços</span>
      </li>
      <li className="button-group__item">
        <NavLink to="/projetos" className={({ isActive }) => isActive ? "button-group__link active" : "button-group__link"}>
          <SquaresFour size={24} />
        </NavLink>
        <span className="tooltip">Projetos</span>
      </li>
      <li className="button-group__item">
        <NavLink to="/habilidades" className={({ isActive }) => isActive ? "button-group__link active" : "button-group__link"}>
          <Shapes size={24} />
        </NavLink>
        <span className="tooltip">Habilidades</span>
      </li>
    </ul>
  )
}

export default Menu;