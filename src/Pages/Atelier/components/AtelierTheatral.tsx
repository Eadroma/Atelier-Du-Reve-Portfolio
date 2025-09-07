import * as React from "react";

const AtelierTheatral: React.FC = () => {
  return (
    <div className="atelier-sub-page">
      <div className="atelier-hero">
        <div className="hero-icon">🎭</div>
        <h3 className="hero-title">Atelier Théâtral</h3>
        <p className="hero-subtitle">
          Développez votre expression, votre confiance et votre créativité sur
          scène
        </p>
      </div>

      <div className="atelier-details">
        <div className="detail-section">
          <h4>🎯 Objectifs</h4>
          <ul>
            <li>Développer l'expression corporelle et vocale</li>
            <li>Renforcer la confiance en soi</li>
            <li>Améliorer la communication et l'écoute</li>
            <li>Stimuler la créativité et l'imagination</li>
            <li>Favoriser le travail en équipe</li>
          </ul>
        </div>

        <div className="detail-section">
          <h4>🎭 Activités Proposées</h4>
          <div className="activities-grid">
            <div className="activity-card">
              <span className="activity-icon">🎪</span>
              <h5>Improvisation</h5>
              <p>Jeux d'improvisation, spontanéité, réactivité</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">📖</span>
              <h5>Interprétation</h5>
              <p>Travail sur textes, personnages, émotions</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🤸</span>
              <h5>Expression Corporelle</h5>
              <p>Gestuelle, mime, danse-théâtre</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🎤</span>
              <h5>Technique Vocale</h5>
              <p>Diction, projection, intonation</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🎨</span>
              <h5>Mise en Scène</h5>
              <p>Création collective, scénographie</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🎬</span>
              <h5>Spectacle</h5>
              <p>Représentation finale, valorisation</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h4>👥 Public Concerné</h4>
          <div className="audience-tags">
            <span className="audience-tag">Enfants 8-12 ans</span>
            <span className="audience-tag">Adolescents 13-18 ans</span>
            <span className="audience-tag">Adultes tous niveaux</span>
            <span className="audience-tag">Personnes timides</span>
            <span className="audience-tag">Groupes constitués</span>
          </div>
        </div>

        <div className="detail-section">
          <h4>📅 Modalités</h4>
          <div className="modalities">
            <div className="modality">
              <strong>Durée :</strong> Sessions de 2h à 4h
            </div>
            <div className="modality">
              <strong>Groupe :</strong> 6 à 12 participants maximum
            </div>
            <div className="modality">
              <strong>Lieu :</strong> Salles polyvalentes, théâtres, écoles
            </div>
            <div className="modality">
              <strong>Progression :</strong> Stages ou cycles réguliers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtelierTheatral;
