export const TabButton = ({tab, handleTabClick,  active}) => {
  return (
    <button 
      key={tab.key}
      className={`btn tab__button ${active === tab.key ? "tab__button--active" : ""}`}    
      onClick={() => handleTabClick(tab.key)}>
      <span className="tab__button-label">{tab.companyName}</span>
      <span className="tab__button-dates">{tab.startDate} - {tab.endDate}</span>
    </button>
  )
}