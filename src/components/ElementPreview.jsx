import { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';
import { useDrag } from 'react-dnd';

const ElementPreview = ({ element }) => {
  const { setSelectedId } = useContext(BuilderContext);

  const [, dragRef] = useDrag({
    type: 'element',
    item: { id: element.id },
  });

  return (
    <div
      ref={dragRef}
      className="absolute cursor-move border rounded p-2"
      style={{
        top: element.position.y,
        left: element.position.x,
      }}
      onClick={() => setSelectedId(element.id)}
    >
      {element.type === 'text' && (
        <p style={{ color: element.properties.color }}>{element.properties.text}</p>
      )}
      {element.type === 'image' && element.properties.src && (
        <img src={element.properties.src} alt="" className="max-w-[150px]" />
      )}
      {element.type === 'button' && (
        <button style={{ color: element.properties.color }} className="border px-3 py-1">
          {element.properties.text}
        </button>
      )}
    </div>
  );
};

export default ElementPreview;
