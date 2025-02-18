import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear}. Todos os direitos reservados por <a href="/">Fernanda Tollotti</a>.</p>
    </footer>
  )
}

export default Footer;