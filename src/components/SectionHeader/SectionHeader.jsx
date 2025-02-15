import "./SectionHeader.css";

const SectionHeader = ({children}) => {
  return(
    <div className="section-header">
      {children}
    </div>
  )
}

export default SectionHeader;