// src/components/Canvas.jsx
import { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';
import { useDrop } from 'react-dnd';
import DraggableElement from './DraggableElement';

const Canvas = () => {
  const { elements, updateElement } = useContext(BuilderContext);

  const [, dropRef] = useDrop({
    accept: 'element',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (!delta) return;

      const element = elements.find((el) => el.id === item.id);
      const newX = element.position.x + delta.x;
      const newY = element.position.y + delta.y;

      updateElement(item.id, {}, { x: newX, y: newY });
    },
  });

  return (
    <div className="w-full h-full bg-white border relative min-h-[600px]" ref={dropRef}>
      {elements.map((el) => (
        <DraggableElement key={el.id} element={el} />
      ))}
    </div>
  );
};

export default Canvas;
