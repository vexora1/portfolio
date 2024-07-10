import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import { FaHome, FaFolder } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

export const links = [
  {
    id: 1,
    text: "Giriş",
    icon: <FaHome className={styles.navIcon} />,
    href: "#home",
  },
  {
    id: 2,
    text: "Projeler",
    icon: <FaFolder className={styles.navIcon} />,
    href: "#projects",
  },
  {
    id: 3,
    text: "Hakkımda",
    icon: <FaUserLarge className={styles.navIcon} />,
    href: "#about",
  },
];

const Sidebar = () => {
  /* get current section with scroll */
  const [active, setActive] = useState('home');
  
  useEffect(() => {
    
    const projects = document.querySelector('#projects');
    const about = document.querySelector('#about');

    window.addEventListener('scroll', () => {
      if (window.scrollY < projects.offsetTop - 25) {
        setActive('home');
      } else if (window.scrollY < about.offsetTop - 25) {
        setActive('projects');
      } else {
        setActive('about');
      }
    });
  }, []);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src="/pp.png" alt="profile" className={styles.profileImg} />
          <h4 className={styles.profileName}>Onur Kaan Güney</h4>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.id} className={styles.navItem}>
                <a href={link.href} className={`${styles.navLink} ${active === link.href.slice(1)  && styles.active}`}>
                  {link.icon}
                  <span className={styles.navText}>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
