import { createContext, useContext, useState } from "react";

export const TabsContext = createContext();

export function Tabs({ children, defaultTab = "" }) {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  return (
    <div className="tabs">
      <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
}

export function Tab({ children, name }) {
  const { currentTab, setCurrentTab } = useContext(TabsContext);

  function selectTab() {
    setCurrentTab(name);
  }

  return (
    <button
      onClick={selectTab}
      className={`tab ${currentTab === name ? "active" : ""}`}
    >
      {children}
    </button>
  );
}

export function TabContent({ children, name }) {
  const { currentTab } = useContext(TabsContext);

  if (name !== currentTab) return null;

  return <div className="tab-desc">{children}</div>;
}
