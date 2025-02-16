import { useState } from "react";
import { tabsData } from "../../data/tabsData";
import { TabButton } from "./TabButton";
import "./Tabs.css";

function Tabs() {
   const [activeTab, setActiveTab] = useState(tabsData.at(-1).key);
   const reversedTabsData = tabsData.slice().reverse();

  return (
    <div className="tab__container">
      <div className="tabs">
        {reversedTabsData.map(tab => (
          <div key={tab.key} className="tab__panel">
            <TabButton key={tab.key} tab={tab} active={activeTab} handleTabClick={setActiveTab} />
            {activeTab === tab.key && (
              <article className="tab__content">
                {tab.content}
                <ul className="tab__tools">
                  {tab.tools.map((tool, index) => (
                    <li key={index} className="tab__tool-item">{tool}</li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs;