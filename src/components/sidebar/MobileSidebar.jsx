import styles from "./Sidebar.module.css";
import { links } from "./Sidebar";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const MobileSidebar = () => {
  const [ toggle, setToggle ] = useState(false);
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
    <div className={styles.mobileMenu}>
      <button
        className={styles.mobileMenuBtn}
        onClick={() => setToggle(!toggle)}
      >
        <IoMenu className={styles.mobileMenuBtnIcon} />
      </button>
      <nav className={`${styles.mobileNav} ${toggle ? styles.mobileNavActive : ""}`}>
        <ul className={styles.mobileNavList}>
          {links.map((link) => (
            <li key={link.id} className={styles.mobileNavItem}>
              <a href={link.href} className={`${styles.mobileNavLink} ${active === link.href.slice(1) && styles.mobileNavLinkActive}`}>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidebar;
