import * as React from "react";
import "./Home.scss";

const HomePage: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="portfolio-container">
      <p className="portfolio-name">
        Margaux <span>Ruggeri</span>
      </p>
      {/* Large centered logo */}
      <div className="logo-container">
        <img src="/logo.svg" alt="Atelier du Rêve Logo" className="main-logo" />
      </div>
      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <div className="scroll-arrow">
          <span>Découvrir</span>
          <div className="arrow-down">↓</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
