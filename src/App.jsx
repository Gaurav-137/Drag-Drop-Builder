// src/App.jsx
import React from 'react';
import { BuilderProvider } from './context/BuilderContext';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ElementForm from './components/ElementForm';
import ExportButton from './components/ExportButton';

const App = () => {
  return (
    <BuilderProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Canvas />
          <div className="flex items-start px-4 py-2">
            <ElementForm />
            <ExportButton />
          </div>
        </div>
      </div>
    </BuilderProvider>
  );
};

export default App;
