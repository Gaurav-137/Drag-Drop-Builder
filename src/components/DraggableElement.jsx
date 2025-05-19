// src/components/DraggableElement.jsx
import { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { BuilderContext } from '../context/BuilderContext';

const DraggableElement = ({ element }) => {
  const { setSelectedId } = useContext(BuilderContext);

  const [, dragRef] = useDrag({
    type: 'element',
    item: { id: element.id },
  });

  const style = {
    position: 'absolute',
    top: element.position.y,
    left: element.position.x,
    cursor: 'move',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    backgroundColor: '#fff',
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setSelectedId(element.id);
  };

  return (
    <div ref={dragRef} style={style} onClick={handleClick}>
      {element.type === 'text' && (
        <p style={{ color: element.properties.color }}>
          {element.properties.text}
        </p>
      )}
      {element.type === 'image' && element.properties.src && (
        <img src={element.properties.src} alt="" className="max-w-[150px]" />
      )}
      {element.type === 'button' && (
        <button style={{ color: element.properties.color }}>
          {element.properties.text}
        </button>
      )}
    </div>
  );
};

export default DraggableElement;
