import Link from "next/link";
import { SOURCE_CODE_LINK } from "./constants";
import styles from "./styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Link target="_blank" href={SOURCE_CODE_LINK}>
                See source code on Github👍
            </Link>
        </footer>
    );
}

export { Footer };
