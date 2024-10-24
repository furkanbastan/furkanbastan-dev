import Link from "next/link";
import styles from "./styles.module.css";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

function ProjectCard({ project }) {
    return (
        <div className={styles.projectCard}>
            <Link href={project.url} className={styles.image} target="_blank">
                <Image
                    src={`/images/${project.image}`}
                    alt="project-photo"
                    sizes="auto"
                    fill
                />
            </Link>
            <div className={styles.category}>{project.category}</div>
            <Link href={project.url} className={styles.title} target="_blank">
                {project.title}
            </Link>
            <div className={styles.description}>{project.description}</div>
            <Link href={project.urlSourceCode} className={styles.link} target="_blank">
                <FaGithub />
                &nbsp;<span>Source Code</span>
            </Link>
        </div>
    );
}

export { ProjectCard };
