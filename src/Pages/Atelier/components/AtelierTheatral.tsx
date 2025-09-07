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
            <li>
              Stimuler la créativité et l’imagination à travers l’improvisation
              et la mise en scène.
            </li>
            <li>
              Développer l’expression orale et corporelle pour gagner en
              confiance et aisance.
            </li>
            <li>
              Favoriser l’écoute, la coopération et le travail d’équipe sur
              scène.
            </li>
            <li>
              Explorer les émotions et les personnages pour enrichir
              l’interprétation.
            </li>
            <li>
              Valoriser les participants grâce à une représentation finale
              partagée avec un public.
            </li>
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
            <span className="audience-tag">Enfants 3-5 ans</span>
            <span className="audience-tag">Enfants 6-12 ans</span>
            <span className="audience-tag">Adolescents 13-17 ans</span>
            <span className="audience-tag">Adultes</span>
            <span className="audience-tag">Groupes</span>
          </div>
        </div>

        <div className="detail-section">
          <h4>📅 Modalités</h4>
          <div className="modalities">
            <div className="modality">
              <strong>Durée :</strong> Sessions de 1h30 à 3h
            </div>
            <div className="modality">
              <strong>Groupe :</strong> 8 à 10 participants maximum
            </div>
            <div className="modality">
              <strong>Lieu :</strong> Centres Sociaux, ACM, Écoles, EHPAD
            </div>
            <div className="modality">
              <strong>Progression :</strong> 2 à 10 séances
            </div>
            <div className="modality">
              <strong>Matériel :</strong> Fourni et adapté à l'âge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtelierTheatral;
