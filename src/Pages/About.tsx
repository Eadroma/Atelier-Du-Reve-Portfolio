import * as React from "react";
import emailjs from "@emailjs/browser";
import type { AtelierTab } from "./Atelier";
import { useContent } from "../content/useContent";
import "./About.scss";

interface AboutPageProps {
  onAtelierSelect?: (tab: AtelierTab) => void;
}

/**
 * AboutPage — biography, workshop shortcut buttons, profile photo, and contact modal.
 * All text is loaded from `src/content/content.json` (gitignored).
 */
const AboutPage: React.FC<AboutPageProps> = ({ onAtelierSelect }) => {
  const content = useContent();
  const { owner, about, contact, ateliers } = content;

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [notification, setNotification] = React.useState<{
    message: string;
    type: "success" | "error";
    show: boolean;
  }>({ message: "", type: "success", show: false });

  // Observer to detect when the About section is in view
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const templateParams = {
      to_email: import.meta.env.VITE_FORM_EMAIL,
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS configuration manquante");
        showNotification(
          "Configuration email manquante. Veuillez contacter l'administrateur.",
          "error"
        );
        return;
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      showNotification(contact.successMessage, "success");
      closeModal();
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      showNotification(contact.errorMessage, "error");
    }
  };

  return (
    <div className="about-container">
      <div className="about-layout">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-main-title">{about.sectionTitle}</h2>
          <div className="header-line"></div>
        </div>

        {/* Main content */}
        <div className="about-main-content">
          {/* Left side — Bio */}
          <div className="about-left">
            <div className="what-i-do-section">
              <div className="section-title">
                <span className="star-icon">✦</span>
                <span>{about.whatIDoTitle}</span>
              </div>

              <div className="description-text">
                <p>{about.bio[0]}</p>
                <p>{about.bio[1]}</p>
                <ul>
                  {about.bioListItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>{about.bio[2]}</p>
              </div>
            </div>

            {/* Workshop shortcut buttons */}
            <div className="skills-buttons">
              <div className="skills-label">
                <span className="triangle-icon">✦</span>
                <span>{about.workshopsTitle}</span>
              </div>

              <div className="skills-grid">
                {ateliers.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className="skill-button"
                    onClick={() => onAtelierSelect?.(tab.id as AtelierTab)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right side — Profile photo */}
          <div className="about-right">
            <div className="circle-decoration"></div>

            <div className="profile-container">
              <div className="profile-frame">
                <div className="profile-photo">
                  <img
                    src={owner.photoUrl}
                    alt={owner.photoAlt}
                    className="profile-image"
                  />
                </div>
              </div>
            </div>

            <div className="contact-button-container">
              <div className="star-decoration star-top">✦</div>
              <button className="contact-link" onClick={openModal}>
                <span>{about.contactButton}</span>
              </button>
              <div className="star-decoration star-bottom">✦</div>
            </div>
          </div>
        </div>

        {/* Back to top */}
        {showBackToTop && (
          <div className="back-to-top" onClick={scrollToHome}>
            <div className="back-to-top-arrow">
              <span>{about.backToTop}</span>
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
              <h2>{contact.modalTitle}</h2>
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
                  placeholder={contact.namePlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={contact.emailPlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={contact.phonePlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <select id="subject" name="subject" required>
                  <option value="">{contact.subjectDefault}</option>
                  {contact.subjects.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={contact.messagePlaceholder}
                ></textarea>
              </div>

              <div className="form-buttons">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={closeModal}
                >
                  {contact.cancelButton}
                </button>
                <button type="submit" className="submit-button">
                  {contact.sendButton}
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
