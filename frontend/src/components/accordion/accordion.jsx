import React, {createContext, useContext, useState} from 'react';

export const AccordionContext = createContext();

export function Accordion({children, defaultItem = '', multiple = false}) {
  const [currentItems, setCurrentItems] = useState(
    defaultItem ? [defaultItem] : []
  );

  return (
    <div className="accordion">
      <AccordionContext.Provider
        value={{currentItems, setCurrentItems, multiple}}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
}

export function AccordionItem({children, className, name}) {
  const {currentItems} = useContext(AccordionContext);

  const isActive = currentItems.includes(name);
  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, {name, isActive})
      : child
  );

  return (
    <div
      className={`accordion-item ${isActive ? 'active' : ''} ${
        className || ''
      }`}
    >
      {childrenWithProps}
    </div>
  );
}

export function AccordionItemButton({children, name, isActive, className}) {
  const {setCurrentItems, multiple} = useContext(AccordionContext);

  function selectItem() {
    setCurrentItems((prevNames) => {
      const alreadySelected = prevNames.includes(name);

      if (!alreadySelected) {
        return multiple ? [...prevNames, name] : [name];
      }

      return prevNames.filter((prevName) => prevName !== name);
    });
  }

  return (
    <button
      onClick={selectItem}
      className={`accordion-btn ${isActive ? 'active' : ''} ${className || ''}`}
    >
      {children}
    </button>
  );
}

export function AccordionItemContent({children, name, isActive, className}) {
  if (!isActive) return null;

  return (
    <div className={`accordion-item-content ${className}`}>{children}</div>
  );
}
