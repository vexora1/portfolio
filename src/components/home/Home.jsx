import styles from "./Home.module.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMouse } from "react-icons/cg";

const titles = ["Software Engineer", "Web Developer", "Full Stack Developer"];

const Home = () => {
  let titlesSequence = [];
  titles.map((title) => {
    if (title === titles[titles.length - 1]) {
      titlesSequence.push(title);
    } else {
      titlesSequence.push(title);
      titlesSequence.push(1000);
    }
  });
  return (
    <section className={styles.container} id="home">
      <h1 className={styles.name}>Onur Kaan Güney</h1>
      <TypeAnimation
        className={styles.title}
        sequence={titlesSequence}
        repeat={Infinity}
        cursor={true}
        wrapper="span"
      ></TypeAnimation>

      <div
        className={styles.buttons}
        /* children animation */
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <a
          href="https://github.com/vexora1/"
          className={styles.buttonLink}
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/onur-kaan-g-1b6164289/"
          className={styles.buttonLink}
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>

      <CgMouse
        className={styles.mouse}
        onClick={() => {
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" });
        }}
      />
    </section>
  );
};

export default Home;
