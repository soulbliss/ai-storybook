// components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  setActiveComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
  return (
    <div className="w-32 bg-gray-100 p-4">
      <h2 className="mb-4 text-xl font-bold">Menu</h2>
      <div className="flex flex-col space-y-2 text-xs">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => setActiveComponent("home")}
        >
          Home
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => setActiveComponent("returning")}
        >
          Returning user
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => setActiveComponent("generate")}
        >
          Generate page
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
