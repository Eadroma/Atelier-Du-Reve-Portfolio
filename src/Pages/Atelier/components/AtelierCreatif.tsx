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
            <li>
              Stimuler l&#8217;imagination à travers l&#8217;expérimentation de
              techniques artistiques variées.
            </li>
            <li>
              Développer la motricité fine grâce aux activités manuelles et
              créatives.
            </li>
            <li>
              Favoriser l&#8217;expression personnelle par le dessin, la musique
              et l&#8217;écriture.
            </li>
            <li>
              Sensibiliser au respect de l&#8217;environnement via le jardinage
              et le recyclage artistique.
            </li>
            <li>
              Encourager la collaboration et le partage au sein d&#8217;ateliers
              collectifs et ludiques.
            </li>
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
            <div className="activity-card">
              <span className="activity-icon">🪴</span>
              <h5>Jardinage créatif</h5>
              <p>
                Apprendre à planter, cultiver et créer avec la nature (pots
                décorés, mini-jardins)
              </p>
            </div>
            <div className="activity-card">
              <span className="activity-icon">📖</span>
              <h5>Autour du Livre</h5>
              <p>
                Lecture animée, écriture créative, illustration et mise en
                valeur de récits
              </p>
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
              <strong>Durée :</strong> Sessions de 1h à 2h
            </div>
            <div className="modality">
              <strong>Groupe :</strong> 8 à 12 participants maximum
            </div>
            <div className="modality">
              <strong>Lieu :</strong> Centres Sociaux, ACM, Écoles, EHPAD
            </div>
            <div className="modality">
              <strong>Progression :</strong> 1 à 8 séances
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
