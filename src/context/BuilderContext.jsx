// src/context/BuilderContext.jsx
import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BuilderContext = createContext();

export const BuilderProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const addElement = (type) => {
    const newElement = {
      id: uuidv4(),
      type,
      properties: getDefaultProperties(type),
      position: { x: 50, y: 50 }, // default start position
    };
    setElements((prev) => [...prev, newElement]);
    setSelectedId(newElement.id);
  };

  const updateElement = (id, newProps = {}, newPos = null) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id
          ? {
              ...el,
              properties: { ...el.properties, ...newProps },
              position: newPos ? newPos : el.position,
            }
          : el
      )
    );
  };

  const getDefaultProperties = (type) => {
    switch (type) {
      case 'text':
        return { text: 'New Text', color: '#000000' };
      case 'image':
        return { src: '' };
      case 'button':
        return { text: 'Click Me', color: '#ffffff' };
      default:
        return {};
    }
  };

  const value = {
    elements,
    addElement,
    updateElement,
    selectedId,
    setSelectedId,
  };

  return (
    <BuilderContext.Provider value={value}>
      {children}
    </BuilderContext.Provider>
  );
};
