import * as React from "react";
import { useContent } from "../content/useContent";
import "./Home.scss";

/**
 * HomePage — landing section displaying the owner name and logo.
 * All text is loaded from `src/content/content.json` (gitignored).
 */
const HomePage: React.FC = () => {
  const content = useContent();
  const { owner, home } = content;

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="portfolio-container">
      <p className="portfolio-name">
        {owner.firstName} <span>{owner.lastName}</span>
      </p>
      {/* Large centered logo */}
      <div className="logo-container">
        <img src="/logo.svg" alt="Atelier du Rêve Logo" className="main-logo" />
      </div>
      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <div className="scroll-arrow">
          <span>{home.discover}</span>
          <div className="arrow-down">↓</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
