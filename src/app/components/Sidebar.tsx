// components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  setActiveComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
  return (
    <div className="w-32 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <div className="flex flex-col space-y-2 text-xs">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setActiveComponent("home")}
        >
          Home
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setActiveComponent("returning")}
        >
          Returning user
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setActiveComponent("generate")}
        >
          Generate page
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
