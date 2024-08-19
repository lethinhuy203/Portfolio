import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import desprojects from "../../data/desprojects.json";
import { ProjectCard } from "./ProjectCard";
import { DesProjectCard } from "./DesCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
        {desprojects.map((project, id) => {
          return <DesProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
