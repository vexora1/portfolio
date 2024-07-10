import styles from "./About.module.css";
import {
  SiVisualstudiocode,
  SiNextdotjs,
  SiArduino,
  SiPython,
  SiDjango,
  SiAutodesk,
  SiMongodb,
  SiMongoose,
  SiHeroku,
  SiPostman,
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
import codedex from "../../assets/codedex.png";
import fcc from "../../assets/fcc.png";
import meta from "../../assets/meta.png";

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
  {
    id: 16,
    name: "MongoDB",
    icon: <SiMongodb className={styles.icon} />,
  },
  {
    id: 17,
    name: "Mongoose",
    icon: <SiMongoose className={styles.icon} />,
  },
  {
    id: 18,
    name: "Heroku",
    icon: <SiHeroku className={styles.icon} />,
  },
  {
    id: 19,
    name: "Postman",
    icon: <SiPostman className={styles.icon} />,
  },
];

const certificates = [
  {
    id: 1,
    name: "Framework Valley: React",
    date: "7 Temmuz 2024",
    organization: "Codedex",
    verifyUrl: "https://www.credential.net/53b0b949-f821-4199-b9c2-354b559c1589",
    image: codedex,
  },
  {
    id: 2,
    name: "Front End Development Libraries",
    date: "2 Temmuz 2024",
    organization: "freeCodeCamp",
    verifyUrl: "https://www.freecodecamp.org/certification/onurkaanguney/front-end-development-libraries",
    image: fcc,
  },
  {
    id: 3,
    name: "React Basics",
    date: "10 Eylül 2023",
    organization: "Meta",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/G49EDPY4KVJX",
    image: meta,
  },
  {
    id: 4,
    name: "Responsive Web Design",
    date: "20 Ağustos 2023",
    organization: "freeCodeCamp",
    verifyUrl: "https://www.freecodecamp.org/certification/onurkaanguney/responsive-web-design",
    image: fcc,
  },
];

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>Hakkımda</h1>
      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <p className={styles.aboutContentText}>
            Merhaba, ben Onur. Üç yılı aşkın süredir yazılım ve elektronik ile 
            ilgilenmekteyim. Kendimi sürekli geliştirmeye ve yeni şeyler öğrenmeye
            odaklanıyorum. Son zamanlarda web geliştirme ve tasarım üzerine çalışmalar
            yapmaktayım.
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
