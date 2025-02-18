import "./NavButton.css";

function NavButton({src, className, children}) {
  return (
    <>
      <a className={className} href={src} target="_blank" rel="noopener noreferrer">{children}</a>
    </>
  )
}

export default NavButton;