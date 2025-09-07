import * as React from "react";
import { HomePage, AboutPage, AtelierPage } from "./Pages";
import type { AtelierTab } from "./Pages/Atelier";
import "./App.scss";

const App: React.FC = () => {
  const [selectedAtelierTab, setSelectedAtelierTab] =
    React.useState<AtelierTab>("creatif");

  const handleAtelierSelect = (tab: AtelierTab) => {
    setSelectedAtelierTab(tab);
    // Smooth scroll to Atelier section
    document.getElementById("atelier")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutPage onAtelierSelect={handleAtelierSelect} />
      </section>
      <section id="atelier">
        <AtelierPage initialTab={selectedAtelierTab} />
      </section>
    </div>
  );
};

export default App;
