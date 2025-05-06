import React, {createContext, useContext, useState} from 'react';

export const AccordionContext = createContext();

export function Accordion({children, defaultItem = ''}) {
  const [currentItem, setCurrentItem] = useState(defaultItem);

  return (
    <div className="accordion">
      <AccordionContext.Provider value={{currentItem, setCurrentItem}}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
}

export function AccordionItem({children, className, name}) {
  const {currentItem} = useContext(AccordionContext);

  const childrenWithName = React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, {name}) : child
  );

  return (
    <div
      className={`accordion-item ${currentItem === name ? 'active' : ''} ${
        className || ''
      }`}
    >
      {childrenWithName}
    </div>
  );
}

export function AccordionItemButton({children, name, className}) {
  const {currentItem, setCurrentItem} = useContext(AccordionContext);

  function selectItem() {
    setCurrentItem((prevName) => (prevName === name ? '' : name));
  }
  return (
    <button
      onClick={selectItem}
      className={`accordion-btn ${currentItem === name ? 'active' : ''} ${
        className || ''
      }`}
    >
      {children}
    </button>
  );
}

export function AccordionItemContent({children, name, className}) {
  const {currentItem} = useContext(AccordionContext);

  if (name !== currentItem) return null;

  return (
    <div className={`accordion-item-content ${className}`}>{children}</div>
  );
}
