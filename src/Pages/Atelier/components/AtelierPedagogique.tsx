import * as React from "react";

const AtelierPedagogique: React.FC = () => {
  return (
    <div className="atelier-sub-page">
      <div className="atelier-hero">
        <div className="hero-icon">📚</div>
        <h3 className="hero-title">Atelier Pédagogique</h3>
        <p className="hero-subtitle">
          Accompagnement des jeunes en formation et préparation de dossiers
          professionnels
        </p>
      </div>

      <div className="atelier-details">
        <div className="detail-section">
          <h4>🎯 Objectifs</h4>
          <ul>
            <li>Accompagner la réussite des formations professionnelles</li>
            <li>Développer les compétences pédagogiques</li>
            <li>Préparer aux examens et certifications</li>
            <li>Renforcer les techniques d'animation</li>
            <li>Favoriser la réflexion sur les pratiques</li>
          </ul>
        </div>

        <div className="detail-section">
          <h4>📚 Formations Accompagnées</h4>
          <div className="activities-grid">
            <div className="activity-card">
              <span className="activity-icon">🎓</span>
              <h5>BPJEPS</h5>
              <p>
                Brevet Professionnel de la Jeunesse, de l'Éducation Populaire et
                du Sport
              </p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">📋</span>
              <h5>CPJEPS</h5>
              <p>
                Certificat Professionnel de la Jeunesse, de l'Éducation
                Populaire et du Sport
              </p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🏕️</span>
              <h5>BAFA</h5>
              <p>Brevet d'Aptitude aux Fonctions d'Animateur</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">👨‍🏫</span>
              <h5>BAFD</h5>
              <p>Brevet d'Aptitude aux Fonctions de Directeur</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h4>🛠️ Services Proposés</h4>
          <div className="services-list">
            <div className="service-item">
              <span className="service-icon">📝</span>
              <div className="service-content">
                <h5>Préparation de dossiers</h5>
                <p>Aide à la rédaction, structuration, relecture</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">🗣️</span>
              <div className="service-content">
                <h5>Préparation aux oraux</h5>
                <p>Simulations d'entretien, travail sur l'expression</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">🎯</span>
              <div className="service-content">
                <h5>Méthodologie</h5>
                <p>Techniques de recherche, organisation du travail</p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-icon">🤝</span>
              <div className="service-content">
                <h5>Accompagnement individuel</h5>
                <p>Suivi personnalisé, soutien motivationnel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h4>👥 Public Concerné</h4>
          <div className="audience-tags">
            <span className="audience-tag">Étudiants en formation</span>
            <span className="audience-tag">Candidats BAFA/BAFD</span>
            <span className="audience-tag">Futurs animateurs</span>
            <span className="audience-tag">Professionnels en reconversion</span>
          </div>
        </div>

        <div className="detail-section">
          <h4>📅 Modalités</h4>
          <div className="modalities">
            <div className="modality">
              <strong>Format :</strong> Accompagnement individuel ou petit
              groupe
            </div>
            <div className="modality">
              <strong>Durée :</strong> Sessions de 1h à 2h, suivi sur mesure
            </div>
            <div className="modality">
              <strong>Lieu :</strong> Présentiel ou visioconférence
            </div>
            <div className="modality">
              <strong>Planning :</strong> Flexible selon les besoins
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtelierPedagogique;
