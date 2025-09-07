import * as React from "react";
import emailjs from "@emailjs/browser";
import type { AtelierTab } from "./Atelier";
import "./About.scss";

interface AboutPageProps {
  onAtelierSelect?: (tab: AtelierTab) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onAtelierSelect }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [notification, setNotification] = React.useState<{
    message: string;
    type: "success" | "error";
    show: boolean;
  }>({ message: "", type: "success", show: false });

  // Observer pour détecter si la section About est visible
  React.useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type, show: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Récupération des données du formulaire
    const templateParams = {
      to_email: import.meta.env.VITE_FORM_EMAIL,
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Configuration EmailJS - vous devrez configurer ces variables d'environnement
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("Configuration EmailJS manquante");
        showNotification(
          "Configuration email manquante. Veuillez contacter l'administrateur.",
          "error"
        );
        return;
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      showNotification("Message envoyé avec succès !", "success");
      closeModal();
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      showNotification(
        "Erreur lors de l'envoi du message. Veuillez réessayer.",
        "error"
      );
    }
  };

  return (
    <div className="about-container">
      <div className="about-layout">
        {/* Header with decorative line */}
        <div className="about-header">
          <h2 className="about-main-title">A PROPOS DE MOI</h2>
          <div className="header-line"></div>
        </div>

        {/* Main content area */}
        <div className="about-main-content">
          {/* Left side - What I Do */}
          <div className="about-left">
            <div className="what-i-do-section">
              <div className="section-title">
                <span className="star-icon">✦</span>
                <span>CE QUE JE FAIS</span>
              </div>

              <div className="description-text">
                <p>
                  Je m&#8217;appelle Margaux Ruggeri, et j&#8217;ai créé
                  L&#8217;atelier du rêve pour transmettre ma passion et mon
                  expérience à travers des activités culturelles et éducatives.
                  Forte de 8 ans d&#8217;expérience en animation et en direction
                  d&#8217;ACM, je propose des interventions variées pour
                  accompagner enfants, adolescents et adultes.
                </p>
                <p>Trois grands axes structurent mes ateliers :</p>
                <ul>
                  <li>
                    Ateliers théâtraux, pour développer l&#8217;expression, la
                    confiance et la créativité.
                  </li>
                  <li>
                    Ateliers créatifs, autour du dessin, de la musique et des
                    arts visuels.
                  </li>
                  <li>
                    Ateliers pédagogiques, destinés à l&#8217;accompagnement des
                    jeunes en formation BPJEPS, CPJEPS ou BAFA, ainsi qu&#8217;à
                    la préparation et l&#8217;évaluation de dossiers.
                  </li>
                </ul>
                <p>
                  Mon ambition est de créer des espaces d&#8217;échanges et
                  d&#8217;apprentissage où chacun peut grandir, s&#8217;exprimer
                  et rêver.
                </p>
              </div>
            </div>

            {/* Skills buttons section */}
            <div className="skills-buttons">
              <div className="skills-label">
                <span className="triangle-icon">✦</span>
                <span>MES ATELIERS</span>
              </div>

              <div className="skills-grid">
                <button
                  className="skill-button"
                  onClick={() => onAtelierSelect?.("creatif")}
                >
                  🎨 Atelier Créatif
                </button>
                <button
                  className="skill-button"
                  onClick={() => onAtelierSelect?.("theatrical")}
                >
                  ✨ Atelier Théâtral
                </button>
                <button
                  className="skill-button"
                  onClick={() => onAtelierSelect?.("pedagogique")}
                >
                  🌈 Atelier Pédagogique
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Profile section */}
          <div className="about-right">
            {/* Decorative elements */}
            <div className="star-decoration star-top">✦</div>
            <div className="circle-decoration"></div>

            {/* Profile photo container */}
            <div className="profile-container">
              <div className="profile-frame">
                <div className="profile-photo">
                  <div className="photo-placeholder">
                    <span>Photo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact button */}
            <button className="contact-link" onClick={openModal}>
              <span>Me Contacter</span>
            </button>

            <div className="star-decoration star-bottom">✦</div>
          </div>
        </div>

        {/* Back to top button - visible seulement quand la section About est visible */}
        {showBackToTop && (
          <div className="back-to-top" onClick={scrollToHome}>
            <div className="back-to-top-arrow">
              <span>Retour</span>
              <div className="arrow-up">↑</div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Me Contacter</h2>
              <button className="close-button" onClick={closeModal}>
                ✕
              </button>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <select id="subject" name="subject" required>
                  <option value="">Sélectionnez un sujet</option>
                  <option value="atelier-creatif">🎨 Atelier Créatif</option>
                  <option value="atelier-theatre">✨ Atelier Théâtral</option>
                  <option value="atelier-pedagogique">
                    🌈 Atelier Pédagogique
                  </option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <div className="form-buttons">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={closeModal}
                >
                  Annuler
                </button>
                <button type="submit" className="submit-button">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification.show && (
        <div className={`notification notification-${notification.type}`}>
          <div className="notification-content">
            <span className="notification-icon">
              {notification.type === "success" ? "✓" : "⚠"}
            </span>
            <span className="notification-message">{notification.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
