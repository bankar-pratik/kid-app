import { Banner } from "../Banner";
import { Navbar } from "../Navbar";
import styles from "./QuestionTemplate.module.css";

export const QuestionTemplate = () => {
    return (
        <div className={styles.backgroundClass}>
            <Navbar />
            <Banner />
        </div>
    );
};
