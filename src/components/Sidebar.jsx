// src/components/Sidebar.jsx
import { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';

const Sidebar = () => {
  const { addElement } = useContext(BuilderContext);

  return (
    <div className="w-1/4 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Add Elements</h2>
      <button onClick={() => addElement('text')} className="block w-full mb-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
        Add Text
      </button>
      <button onClick={() => addElement('image')} className="block w-full mb-2 px-4 py-2 bg-green-600 rounded hover:bg-green-700">
        Add Image
      </button>
      <button onClick={() => addElement('button')} className="block w-full px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">
        Add Button
      </button>
    </div>
  );
};

export default Sidebar;
