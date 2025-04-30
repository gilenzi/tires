import { createContext, useContext, useState } from "react";

export const AccordionContext = createContext();

export function Accordion({ children, defaultItem = "" }) {
  const [currentItem, setCurrentItem] = useState(defaultItem);

  return (
    <div className="accordion">
      <AccordionContext.Provider value={{ currentItem, setCurrentItem }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
}

export function AccordionItem({ children }) {
  return (
    <div
        className="accordion-item"
    >
      {children}
    </div>
  );
}

export function AccordionItemButton({ children, name }) {
    const {currentItem, setCurrentItem } = useContext(AccordionContext);

    function selectItem() {
        setCurrentItem(prevName => {
            if(prevName == name) return "";
            return name;
        });
    }
  
    return (
      <button
        onClick={selectItem}
        className={`accordion-btn ${currentItem === name ? "active" : ""}`}
      >
        {children}
      </button>
    );
}
  

export function AccordionItemContent({ children, name }) {
  const { currentItem } = useContext(AccordionContext);

  if (name !== currentItem) return null;

  return <div className="accordion-item-content">{children}</div>;
}
