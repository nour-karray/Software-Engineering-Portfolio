import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { useLanguage } from "../hooks/useLanguage.jsx";
import ProjectCard from "./ProjectCard";

const filterOrder = [
  "Tous",
  "Web",
  "IA / Data",
  "BI / Data",
  "Mobile / IA",
  "Java / Architecture",
  "Entrepreneuriat",
];

function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("Tous");
  const availableCategories = new Set(projects.map((project) => project.category));
  const filters = filterOrder.filter(
    (item) => item === "Tous" || availableCategories.has(item),
  );
  const localizedProjects = projects.map((project) => ({
    ...project,
    ...(t.projects.items[project.id] ?? {}),
    originalCategory: project.category,
  }));
  const visibleProjects =
    filter === "Tous"
      ? localizedProjects
      : localizedProjects.filter((project) => project.originalCategory === filter);

  return (
    <section className="section projects" id="projets">
      <div className="container">
        <motion.div
          className="section-heading section-heading--center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.intro}</p>
        </motion.div>

        <div className="project-filters" role="group" aria-label={t.projects.filtersLabel}>
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {t.projects.filters[item] ?? item}
            </button>
          ))}
        </div>

        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                labels={{ technologies: t.projects.technologies }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
