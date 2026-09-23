import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiBox,
  FiCpu,
  FiDatabase,
  FiFigma,
  FiGitBranch,
  FiGithub,
  FiServer,
  FiZap,
} from "react-icons/fi";
import { FaCss3Alt, FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiBlazor,
  SiDjango,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSpringboot,
} from "react-icons/si";
import { skills } from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage.jsx";

const skillIcons = {
  html: SiHtml5,
  css: FaCss3Alt,
  javascript: SiJavascript,
  php: SiPhp,
  java: FaJava,
  python: SiPython,
  react: SiReact,
  angular: SiAngular,
  django: SiDjango,
  laravel: SiLaravel,
  spring: SiSpringboot,
  api: FiServer,
  blazor: SiBlazor,
  mysql: SiMysql,
  mongodb: SiMongodb,
  sqlserver: SiDotnet,
  sql: FiDatabase,
  phpmyadmin: FiDatabase,
  git: FiGitBranch,
  github: FiGithub,
  figma: FiFigma,
  ml: FiCpu,
  dl: FiZap,
  sklearn: SiScikitlearn,
  "python-data": FiDatabase,
};

const skillColors = {
  html: "#e85d35",
  css: "#3478f6",
  javascript: "#e9b82e",
  php: "#777bb4",
  java: "#d66b2f",
  python: "#3b78b7",
  react: "#37b8d9",
  angular: "#d73b57",
  django: "#2f7d55",
  laravel: "#e85b4a",
  spring: "#6bae45",
  api: "#5f6fd6",
  blazor: "#7b55c7",
  mysql: "#327899",
  mongodb: "#4c9b52",
  sqlserver: "#c44d5c",
  sql: "#6f7d91",
  phpmyadmin: "#e09a3f",
  git: "#e85d35",
  github: "#1f1c1f",
  figma: "#c95b78",
  ml: "#c95b78",
  dl: "#8f65d8",
  sklearn: "#e9942d",
  "python-data": "#3b78b7",
};

function Skills() {
  const { t } = useLanguage();
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);
  const activeSkills = skills[active];

  const handleTabClick = (category) => {
    setActive(category);
  };

  return (
    <section className="section skills" id="competences">
      <div className="container">
        <motion.div
          className="section-heading section-heading--center skills__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2>{t.skills.title}</h2>
          <p>{t.skills.intro}</p>
        </motion.div>

        <motion.div
          className="skill-tabs"
          role="tablist"
          aria-label={t.skills.aria}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              role="tab"
              aria-selected={active === category}
              className={active === category ? "active" : ""}
              onClick={() => handleTabClick(category)}
            >
              {t.skills.categoryLabels[category] ?? category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            className="skill-showcase"
            key={active}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="skill-hex-grid">
              {activeSkills.map((skill, index) => {
                const Icon = skillIcons[skill.icon] ?? FiBox;
                const color = skillColors[skill.icon] ?? "#c95b78";

                return (
                  <motion.article
                    className="skill-hex"
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.055, duration: 0.35 }}
                    whileHover={{ y: -8, scale: 1.025 }}
                    style={{ "--skill-color": color }}
                  >
                    <div className="skill-hex__inner">
                      <span className="skill-hex__icon">
                        <Icon />
                      </span>
                      <h3>{skill.name}</h3>
                      <p>{t.skills.descriptions[skill.name] ?? skill.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;
