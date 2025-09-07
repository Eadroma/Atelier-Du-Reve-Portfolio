import * as React from "react";

const AtelierCreatif: React.FC = () => {
  return (
    <div className="atelier-sub-page">
      <div className="atelier-hero">
        <div className="hero-icon">🎨</div>
        <h3 className="hero-title">Atelier Créatif</h3>
        <p className="hero-subtitle">
          Éveillez votre créativité à travers le dessin, la musique et les arts
          visuels
        </p>
      </div>

      <div className="atelier-details">
        <div className="detail-section">
          <h4>🎯 Objectifs</h4>
          <ul>
            <li>Développer l'expression artistique personnelle</li>
            <li>Découvrir différentes techniques créatives</li>
            <li>Renforcer la confiance en soi par l'art</li>
            <li>Stimuler l'imagination et l'innovation</li>
          </ul>
        </div>

        <div className="detail-section">
          <h4>🛠️ Activités Proposées</h4>
          <div className="activities-grid">
            <div className="activity-card">
              <span className="activity-icon">🖌️</span>
              <h5>Dessin & Peinture</h5>
              <p>Techniques diverses, aquarelle, acrylique, pastel</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🎵</span>
              <h5>Éveil Musical</h5>
              <p>Découverte d'instruments, rythme, composition</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🖼️</span>
              <h5>Arts Visuels</h5>
              <p>Collage, sculpture, mixed-media, digital art</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">✂️</span>
              <h5>Arts Manuels</h5>
              <p>Bricolage créatif, recyclage artistique</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h4>👥 Public Concerné</h4>
          <div className="audience-tags">
            <span className="audience-tag">Enfants 6-12 ans</span>
            <span className="audience-tag">Adolescents 13-17 ans</span>
            <span className="audience-tag">Adultes débutants</span>
            <span className="audience-tag">Groupes scolaires</span>
          </div>
        </div>

        <div className="detail-section">
          <h4>📅 Modalités</h4>
          <div className="modalities">
            <div className="modality">
              <strong>Durée :</strong> Sessions de 1h30 à 3h
            </div>
            <div className="modality">
              <strong>Groupe :</strong> 8 à 15 participants maximum
            </div>
            <div className="modality">
              <strong>Lieu :</strong> À domicile, centres sociaux, écoles
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

export default AtelierCreatif;
