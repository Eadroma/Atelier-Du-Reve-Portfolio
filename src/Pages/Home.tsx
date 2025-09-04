import * as React from "react";
import "./Home.scss";

const HomePage: React.FC = () => {
  return (
    <div className="portfolio-container">
      <p className="portfolio-name">
        Margaux <span>Ruggeri</span>
      </p>
      <div className="horizontal-bar"></div>
      <h1 className="portfolio-title">
        <span className="left-title">L'atelier</span>
        <span className="middle-title">du</span>
        <span className="right-title">rêve</span>
      </h1>
    </div>
  );
};

export default HomePage;
