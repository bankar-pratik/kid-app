import { ExitBtn, MusicBtn, SoundBtn } from "../../svgs/Btns";
import styles from "./navbar.module.css";

export const Navbar = () => {
    const alertCall = () => {
        alert("Under construction");
        return;
    };
    return (
        <div className={styles.navbarParent}>
            <div className={styles.startSection}>
                <div className={styles.musicBtn} onClick={alertCall}>
                    <MusicBtn />
                </div>
                <div onClick={alertCall}>
                    <SoundBtn />
                </div>
            </div>
            <div className={styles.midSection}>
                <button className={styles.midSectionContent}>
                    <p>Fill the blank space with word in bubbles</p>
                </button>
            </div>
            <div className={styles.endSection} onClick={alertCall}>
                <ExitBtn />
            </div>
        </div>
    );
};
