// src/components/ExportButton.jsx
import { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';

const ExportButton = () => {
  const { elements } = useContext(BuilderContext);

  const handleExport = () => {
    const html = elements
      .map((el) => {
        const { type, properties, position } = el;
        const style = `style="position:absolute; top:${position.y}px; left:${position.x}px;"`;

        if (type === 'text') {
          return `<div ${style}><span style="color:${properties.color}">${properties.text}</span></div>`;
        }
        if (type === 'image') {
          return `<img src="${properties.src}" ${style} />`;
        }
        if (type === 'button') {
          return `<button ${style} style="color:${properties.color}">${properties.text}</button>`;
        }
        return '';
      })
      .join('\n');

    const blob = new Blob([`<html><body>${html}</body></html>`], {
      type: 'text/html',
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'layout.html';
    link.click();
  };

  return (
    <button
      onClick={handleExport}
      className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Export HTML
    </button>
  );
};

export default ExportButton;
