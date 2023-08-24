import React, { useState, useEffect } from 'react';
import "./home.css";
import Me from "../../assets/avatar.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  const educationItems = [
    'Full Stack Web Developer',
    'Öğrenci',
    'Yazılım Geliştirici',
    'Front-end Developer',
    'Back-end Developer',
    'Web Tasarımcısı',
    'Web Geliştirici',
    'Web Programcısı',
    'Maker',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentEducation, setCurrentEducation] = useState(educationItems[currentIndex]);
  const educationItemsHTML = document.querySelectorAll('.home__education__item');

  // Change education item every 3 seconds and give active class to current item
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % educationItems.length);
    }, 3000);

    educationItemsHTML.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    setCurrentEducation(educationItems[currentIndex]);

    return () => clearInterval(interval);
  }, [currentIndex]);
  

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="me" className="home__img" />
        <h1 className="home__name">Onur Kaan Güney</h1>
        <div className="home__education">
          {educationItems.map((item, index) => {
            return (
              <span key={index} className="home__education__item">
                {item}
              </span>
            )
          })}
        </div>

        <HeaderSocials />

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
}

export default Home;