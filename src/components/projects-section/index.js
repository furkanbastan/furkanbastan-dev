import { ProjectCard } from "../project-card";
import styles from "./styles.module.css";
import Data from "@/data/projects.json";

function ProjectsSection() {
    return (
        <section className={styles.projectsSection}>
            <h3 className={styles.title}>
                Projeler<span>Projeler</span>
            </h3>
            <div className={styles.projects}>
                {Data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export { ProjectsSection };
