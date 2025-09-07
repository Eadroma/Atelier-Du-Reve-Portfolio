import * as React from "react";
import AtelierCreatif from "./components/AtelierCreatif";
import AtelierTheatral from "./components/AtelierTheatral";
import AtelierPedagogique from "./components/AtelierPedagogique";
import "./Atelier.scss";

export type AtelierTab = "creatif" | "theatrical" | "pedagogique";

interface AtelierPageProps {
  initialTab?: AtelierTab;
}

const AtelierPage: React.FC<AtelierPageProps> = ({
  initialTab = "creatif",
}) => {
  const [activeTab, setActiveTab] = React.useState<AtelierTab>(initialTab);
  const [showBackToAbout, setShowBackToAbout] = React.useState(false);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Observer pour détecter si la section Atelier est visible
  React.useEffect(() => {
    const atelierSection = document.getElementById("atelier");
    if (!atelierSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToAbout(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(atelierSection);

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const tabs = [
    { id: "creatif", label: "🎨 Atelier Créatif", emoji: "🎨" },
    { id: "theatrical", label: "🎭 Atelier Théâtral", emoji: "🎭" },
    { id: "pedagogique", label: "📚 Atelier Pédagogique", emoji: "📚" },
  ] as const;

  const renderTabContent = () => {
    switch (activeTab) {
      case "creatif":
        return <AtelierCreatif />;
      case "theatrical":
        return <AtelierTheatral />;
      case "pedagogique":
        return <AtelierPedagogique />;
      default:
        return <AtelierCreatif />;
    }
  };

  return (
    <div className="atelier-container">
      <div className="atelier-layout">
        {/* Header with navigation tabs */}
        <div className="atelier-header">
          <h2 className="atelier-main-title">MES ATELIERS</h2>
          <div className="header-line"></div>

          {/* Navigation Tabs */}
          <nav className="atelier-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id as AtelierTab)}
              >
                <span className="tab-emoji">{tab.emoji}</span>
                <span className="tab-text">
                  {tab.label.replace(tab.emoji + " ", "")}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="atelier-content">{renderTabContent()}</div>
      </div>

      {/* Back to About button - placé au même niveau que dans About.tsx */}
      {showBackToAbout && (
        <div className="back-to-about" onClick={scrollToAbout}>
          <div className="back-to-about-arrow">
            <span>Retour</span>
            <div className="arrow-up">↑</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AtelierPage;
