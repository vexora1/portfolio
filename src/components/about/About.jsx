import React from 'react';
import "./about.css";
import Image from "../../assets/avatar.png";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">Hakkımda</h2>

      <div className="about__container grid">
        <img src={Image} className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Merhaba, ben Onur. 3 yılı aşkın süredir yazılımla ilgilenmekteyim.
              Yazılıma ilk adımımı Arduino sayesinde attım. Daha sonra Node.JS ile devam ettim.
              Ardından web alanına geçiş yaparak HTML, CSS, JavaScript öğrendim.
              Statik web sitelerin yanında dinamik web siteleri yapabilmek için Django ve beraberinde Python öğrendim.
              Şu an kullanıcı deneyimini artırmak ve daha iyi arayüzler sunabilmek için React öğreniyorum.
              İlerleyen zamanda mobil uygulama geliştirmek için Capacitor.js öğrenmeyi planlıyorum.
            </p>
          </div>

          <div className="interested__languages grid nocursor">
            <div className="language__card">
              <i className="language__card-icon fab fa-html5"></i>
              <h3 className='language__card-title'>HTML</h3>
            </div>

            <div className="language__card">
              <i className="language__card-icon fab fa-css3-alt"></i>
              <h3 className='language__card-title'>CSS</h3>
            </div>

            <div className="language__card">
              <i className="language__card-icon fab fa-js-square"></i>
              <h3 className='language__card-title'>JavaScript</h3>
            </div>

            <div className="language__card">
              <i className="language__card-icon fab fa-react"></i>
              <h3 className='language__card-title'>React</h3>
            </div>

            <div className="language__card">
              <i className="language__card-icon fab fa-node-js"></i>
              <h3 className='language__card-title'>Node.JS</h3>
            </div>

            <div className="language__card">
              <i className="language__card-icon fab fa-python"></i>
              <h3 className='language__card-title'>Python</h3>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;