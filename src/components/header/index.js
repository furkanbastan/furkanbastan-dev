import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { LOGO_NAME, PROFILE_GITHUB_SRC, PROFILE_IMAGE_SRC } from "./consts";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Link href="/" className={styles.logo}>
                    {LOGO_NAME}
                </Link>
                <Link
                    href={PROFILE_GITHUB_SRC}
                    target="_blank"
                    className={styles.image}
                >
                    <Image fill src={PROFILE_IMAGE_SRC} alt="github-profile" className={styles.imagee} sizes="auto" />
                </Link>
            </div>
        </header>
    );
}

export { Header };
