import * as React from "react";

const AtelierPedagogique: React.FC = () => {
  return (
    <div className="atelier-sub-page">
      <div className="atelier-hero">
        <div className="hero-icon">📚</div>
        <h3 className="hero-title">Atelier Pédagogique</h3>
        <p className="hero-subtitle">
          Accompagnement en formation et validation des écrits
        </p>
      </div>

      <div className="atelier-details">
        <div className="detail-section">
          <h4>🎯 Objectifs</h4>
          <ul>
            <li>
              Accompagner les stagiaires dans leur progression et leur
              professionnalisation.
            </li>
            <li>
              Transmettre des savoirs et méthodes adaptés aux différentes
              formations (BAFA, BPJEPS, etc.).
            </li>
            <li>
              Développer l&#8217;autonomie et la responsabilité chez les futurs
              animateurs et directeurs.
            </li>
            <li>
              Évaluer et valoriser les compétences à travers le suivi et
              l&#8217;examen des dossiers.
            </li>
            <li>
              Former une nouvelle génération d&#8217;acteurs éducatifs engagés
              et qualifiés.
            </li>
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
              <span className="activity-icon">⛹️</span>
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
              <span className="activity-icon">📋</span>
              <h5>BAFD</h5>
              <p>Brevet d'Aptitude aux Fonctions de Directeur</p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">🏫</span>
              <h5>Formatrice en cours</h5>
              <p>
                Accompagnement direct des stagiaires pendant leurs modules de
                formation, avec un suivi personnalisé et des mises en situation
                pratiques
              </p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">👩‍🏫</span>
              <h5>Examinatrice de dossiers</h5>
              <p>
                Participation aux jurys, analyse et validation des parcours de
                formation afin de garantir la qualité et la cohérence des acquis
              </p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h4>👥 Public Concerné</h4>
          <div className="audience-tags">
            <span className="audience-tag">Candidats CPJEPS/BPJEPS</span>
            <span className="audience-tag">Candidats BAFA/BAFD</span>
            <span className="audience-tag">Futurs animateurs</span>
            <span className="audience-tag">Futurs directeurs</span>
            <span className="audience-tag">Professionnels en reconversion</span>
          </div>
        </div>

        <div className="detail-section">
          <h4>📅 Modalités</h4>
          <div className="modalities">
            <div className="modality">
              <strong>Durée :</strong> Sessions de 2h à 4h
            </div>
            <div className="modality">
              <strong>Groupe :</strong> 8 à 20 participants maximum
            </div>
            <div className="modality">
              <strong>Lieu :</strong> Centres de formation, en ligne ou en
              présentiel
            </div>
            <div className="modality">
              <strong>Progression :</strong> Intervention ponctuelle ou sur la
              durée de la formation
            </div>
            <div className="modality">
              <strong>Matériel :</strong> Supports de cours, ressources
              numériques et outils d'évaluation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtelierPedagogique;
