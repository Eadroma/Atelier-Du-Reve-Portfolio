import * as React from "react";
import { useContent } from "../../../content/useContent";

/**
 * AtelierPedagogique — pedagogical workshop detail page.
 * All text content is loaded from `src/content/content.json` (gitignored).
 */
const AtelierPedagogique: React.FC = () => {
  const { ateliers } = useContent();
  const atelier = ateliers.pedagogique;

  return (
    <div className="atelier-sub-page">
      <div className="atelier-hero">
        <div className="hero-icon">{atelier.icon}</div>
        <h3 className="hero-title">{atelier.title}</h3>
        <p className="hero-subtitle">{atelier.subtitle}</p>
      </div>

      <div className="atelier-details">
        <div className="detail-section">
          <h4>{atelier.objectivesTitle}</h4>
          <ul>
            {atelier.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h4>{atelier.activitiesTitle}</h4>
          <div className="activities-grid">
            {atelier.activities.map((act, i) => (
              <div className="activity-card" key={i}>
                <span className="activity-icon">{act.icon}</span>
                <h5>{act.title}</h5>
                <p>{act.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h4>{atelier.audienceTitle}</h4>
          <div className="audience-tags">
            {atelier.audience.map((tag, i) => (
              <span className="audience-tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h4>{atelier.modalitiesTitle}</h4>
          <div className="modalities">
            {atelier.modalities.map((mod, i) => (
              <div className="modality" key={i}>
                <strong>{mod.label} :</strong> {mod.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtelierPedagogique;
