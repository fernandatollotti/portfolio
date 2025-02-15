import "./LinkButton.css";

const LinkButton = ({href, children, ...props}) => {
  return (
    <a href={href} className={props.className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default LinkButton;