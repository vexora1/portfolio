import React, { useEffect, useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/logo.png';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  // which section is user viewing
  const [active, setActive] = useState('home');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 0 && window.scrollY < 600) {
      setActive('home');
    } else if (window.scrollY >= 600 && window.scrollY < 1200) {
      setActive('about');
    } else if (window.scrollY >= 1200 && window.scrollY < 1800) {
      setActive('services');
    } else if (window.scrollY >= 1800 && window.scrollY < 2400) {
      setActive('work');
    } else if (window.scrollY >= 2400 && window.scrollY < 3000) {
      setActive('pricing');
    }
  });

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav__link');

    if (active === 'home') {
      navLinks.forEach((navLink => {
        navLink.classList.remove('active');
      }))
      navLinks[0].classList.add('active');
    } else if (active === 'about') {
      navLinks.forEach((navLink => {
        navLink.classList.remove('active');
      }))
      navLinks[1].classList.add('active');
    }
    else if (active === 'services') {
      navLinks.forEach((navLink => {
        navLink.classList.remove('active');
      }))
      navLinks[2].classList.add('active');
    }
    else if (active === 'work') {
      navLinks.forEach((navLink => {
        navLink.classList.remove('active');
      }))
      navLinks[3].classList.add('active');
    }
    else if (active === 'pricing') {
      navLinks.forEach((navLink => {
        navLink.classList.remove('active');
      }))
      navLinks[4].classList.add('active');
    }

  }, [active]);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a className="nav__logo" onClick={() => {
          window.scrollTo(0, document.querySelector('#home').offsetTop);
        }}>
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" onClick={() => {
                  window.scrollTo(0, document.querySelector('#home').offsetTop);
                }}>
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" onClick={() => {
                  window.scrollTo(0, document.querySelector('#about').offsetTop);
                }}>
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" onClick={() => {
                  window.scrollTo(0, document.querySelector('#services').offsetTop);
                }}>
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" onClick={() => {
                  window.scrollTo(0, document.querySelector('#work').offsetTop);
                }}>
                  <i className="icon-folder"></i>
                </a>
              </li>

              <li className="nav__item">
                <a className="nav__link" onClick={() => {
                  window.scrollTo(0, document.querySelector('#pricing').offsetTop);
                }}>
                  <i className="icon-layers"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__foter">
          <span className="copyright">Onur Kaan Güney</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => setToggle(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
}

export default Sidebar;