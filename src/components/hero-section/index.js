import Link from "next/link";
import { ICONS, TITLE } from "./constants";
import styles from "./styles.module.css";

function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.title}>
                {TITLE}
                <span className={styles.titleBlur}>{TITLE}</span>
            </h1>
            <p className={styles.content}>
                <span className={styles.white}>Web</span>
                &nbsp;ve&nbsp;
                <span className={styles.white}>Mobil</span>
                &nbsp;uygulamalar geliştirmeyi seven bir&nbsp;
                <span className={styles.white}>Bilgisayar Mühendisiyim.</span>
            </p>
            <nav className={styles.nav}>
                {ICONS.map((icon) => (
                    <Link target="_blank" key={icon.id} href={icon.href}>
                        {icon.element}
                    </Link>
                ))}
            </nav>
        </section>
    );
}

export { HeroSection };
