import React from "react";

import styles from "./Design.module.css";
import skills from "../../data/designskills.json";
import { getImageUrl } from "../../utils";

export const Design = () => {
  return (
    <section className={styles.container} id="design">
      <h2 className={styles.title}>Design Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
