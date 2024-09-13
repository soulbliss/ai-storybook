"use client";
// pages/index.tsx
import React, { useState } from "react";
// import Sidebar from '../components/Sidebar';
import GenerationPage from "./components/GenerationPage";
import Home from "./components/Home";
import ReturningUserHome from "./components/ReturningHomeUser";
import Sidebar from "./components/Sidebar";
// import Onboarding from '../components/Onboarding';
// import EmptyState from '../components/EmptyState';

const IndexPage: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "returning":
        return <ReturningUserHome />;
      case "generate":
        return <GenerationPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 p-8">{renderComponent()}</div>
    </div>
  );
};

export default IndexPage;
