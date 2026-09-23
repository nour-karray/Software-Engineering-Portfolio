import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowDownRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { profile } from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage.jsx";

function useTyping(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setWordIndex(0);
    setText(words[0] ?? "");
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    if (!words.length) return undefined;

    const word = words[wordIndex];
    const atEnd = text === word;
    const atStart = text === "";
    const delay = atEnd && !deleting ? 1500 : deleting ? 35 : 72;

    const timer = setTimeout(() => {
      if (atEnd && !deleting) {
        setDeleting(true);
        return;
      }

      if (atStart && deleting) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setText(
        deleting
          ? word.slice(0, Math.max(0, text.length - 1))
          : word.slice(0, text.length + 1),
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);

  return text;
}

function Hero() {
  const { t } = useLanguage();
  const typedText = useTyping(t.hero.statuses);

  return (
    <section className="hero section" id="accueil">
      <div className="hero__grid container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow eyebrow--plain">{t.hero.greeting}</p>
          <h1>
            <span className="hero__name-line">Nour El Houda</span>
            <strong>Karray</strong>
          </h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="typing-line" aria-label={typedText}>
            {typedText}
            <span className="typing-cursor" />
          </p>
          <p className="hero__summary">{t.hero.summary}</p>

          <div className="hero__actions">
            <button
              type="button"
              className="button button--primary"
              onClick={() =>
                document
                  .getElementById("projets")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.projectsButton} <FiArrowDownRight />
            </button>
            <a
              className="button button--secondary"
              href={profile.cv}
              download={t.hero.cvDownloadName}
            >
              {t.hero.cvButton} <FiDownload />
            </a>
          </div>

          <div className="socials" aria-label={t.hero.socialsLabel}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.emailLink} target="_blank" rel="noreferrer" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait-ring">
            <div className="hero__portrait">
              <img src={profile.portrait} alt={t.hero.portraitAlt} />
            </div>
          </div>
          <motion.div
            className="floating-tag floating-tag--top"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>✦</span> {t.hero.creative}
          </motion.div>
          <motion.div
            className="floating-tag floating-tag--bottom"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="status-dot" /> {t.hero.availability}
          </motion.div>
          <motion.div
            className="floating-tag floating-tag--side"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="motivation-dot" /> {t.hero.motivated}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="scroll-hint"
        onClick={() =>
          document.getElementById("a-propos")?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {t.hero.scroll} <FiArrowDown />
      </motion.button>
    </section>
  );
}

export default Hero;
