import styles from "./About.module.css";
import {
  SiVisualstudiocode,
  SiNextdotjs,
  SiArduino,
  SiPython,
  SiDjango,
  SiAutodesk,
} from "react-icons/si";
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const programsAndToolsAndLanguages = [
  {
    id: 1,
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode className={styles.icon} />,
  },
  {
    id: 2,
    name: "Figma",
    icon: <FaFigma className={styles.icon} />,
  },
  {
    id: 3,
    name: "HTML",
    icon: <FaHtml5 className={styles.icon} />,
  },
  {
    id: 4,
    name: "CSS",
    icon: <FaCss3Alt className={styles.icon} />,
  },
  {
    id: 5,
    name: "JavaScript",
    icon: <IoLogoJavascript className={styles.icon} />,
  },
  {
    id: 6,
    name: "Node.js",
    icon: <FaNode className={styles.icon} />,
  },
  {
    id: 7,
    name: "React",
    icon: <FaReact className={styles.icon} />,
  },
  {
    id: 8,
    name: "Next.js",
    icon: <SiNextdotjs className={styles.icon} />,
  },
  {
    id: 9,
    name: "Django",
    icon: <SiDjango className={styles.icon} />,
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className={styles.icon} />,
  },
  {
    id: 11,
    name: "Bootstrap",
    icon: <FaBootstrap className={styles.icon} />,
  },
  {
    id: 12,
    name: "Git",
    icon: <FaGitAlt className={styles.icon} />,
  },
  {
    id: 13,
    name: "Arduino",
    icon: <SiArduino className={styles.icon} />,
  },
  {
    id: 14,
    name: "Python",
    icon: <SiPython className={styles.icon} />,
  },
  {
    id: 15,
    name: "Autodesk Eagle",
    icon: <SiAutodesk className={styles.icon} />,
  },
];

const certificates = [
  {
    id: 1,
    name: "Sertifika Adı",
    date: "Tarih",
    organization: "Kurum",
    verifyUrl: "Doğrulama Linki",
    image: "/pp.png",
  },
  {
    id: 1,
    name: "Sertifiaaaaaaaaaaaaaaaaaaaaaaaka Adı",
    date: "Tarih",
    organization: "Kurum",
    verifyUrl: "Doğrulama Linki",
    image: "/pp.png",
  },
  {
    id: 1,
    name: "Sertifika Adı",
    date: "Tarih",
    organization: "Kurum",
    verifyUrl: "Doğrulama Linki",
    image: "/pp.png",
  },
  {
    id: 1,
    name: "Sertifika Adı",
    date: "Tarih",
    organization: "Kurum",
    verifyUrl: "Doğrulama Linki",
    image: "/pp.png",
  },
];

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>Hakkımda</h1>
      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <p className={styles.aboutContentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            laoreet, ligula in ultricies lacinia, purus purus ultricies nunc,
            nec tincidunt velit neque eu eros. Nullam nec nisl in felis
            pellentesque ultricies. Nulla facilisi. Nullam nec nisl in felis
            pellentesque ultricies. Nulla facilisi.
          </p>
        </div>

        <div className={styles.programsAndToolsAndLanguages}>
          <div className={styles.programsAndToolsAndLanguagesContent}>
            {programsAndToolsAndLanguages.map((item) => (
              <div
                key={item.id}
                className={styles.programsAndToolsAndLanguagesItem}
              >
                {item.icon}
                <span className={styles.name}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.certificates}>
          <h2 className={styles.certificatesTitle}>Sertifikalar</h2>
          <div className={styles.certificatesContent}>
            {certificates.map((certificate) => {
              return (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.certificateVerify}
                >
                  <div className={styles.certificateItem}>
                    <div className={styles.certificateContent}>
                      <img
                        src={certificate.image}
                        alt={certificate.name}
                        className={styles.certificateImage}
                      />

                      <div className={styles.certificateDetails}>
                        <span className={styles.certificateName}>
                          {certificate.name}
                        </span>
                        <span className={styles.certificateOrgAndDate}>
                          {certificate.organization} - {certificate.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <FaExternalLinkAlt className={styles.certificateVerifyIcon} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
