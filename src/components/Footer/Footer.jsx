import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src={logo} alt="Logo da Fernanda Tollotti" loading="lazy" />
      <p>© {currentYear} - Todos os direitos reservados por <a href="/">Fernanda Tollotti</a>.</p>
    </footer>
  )
}

export default Footer;