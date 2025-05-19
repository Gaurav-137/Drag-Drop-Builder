// src/components/ElementForm.jsx
import { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';

const ElementForm = () => {
  const { elements, selectedId, updateElement } = useContext(BuilderContext);

  const selected = elements.find((el) => el.id === selectedId);

  if (!selected) return <p className="text-gray-500">Select an element to edit it</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateElement(selected.id, { [name]: value });
  };

  return (
    <div className="w-full max-w-xs p-4 border rounded bg-gray-50 shadow-md">
      <h3 className="text-lg font-semibold mb-2">Edit {selected.type} Element</h3>
      {selected.type === 'text' || selected.type === 'button' ? (
        <>
          <label className="block mb-2">
            Text:
            <input
              type="text"
              name="text"
              value={selected.properties.text}
              onChange={handleChange}
              className="w-full mt-1 border p-1"
            />
          </label>
          <label className="block mb-2">
            Color:
            <input
              type="color"
              name="color"
              value={selected.properties.color}
              onChange={handleChange}
              className="mt-1"
            />
          </label>
        </>
      ) : selected.type === 'image' ? (
        <label className="block mb-2">
          Image URL:
          <input
            type="text"
            name="src"
            value={selected.properties.src}
            onChange={handleChange}
            className="w-full mt-1 border p-1"
          />
        </label>
      ) : null}
    </div>
  );
};

export default ElementForm;
