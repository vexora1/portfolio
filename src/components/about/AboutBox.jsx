import React from "react";

const AboutBox = () => {
  return(
    <div className="about__boxes grid nocursor">
      <div className="about__box">
        <i className="about__icon fas fa-hourglass"></i>

        <div>
          <h3 className="about__title">3+</h3>
          <span className="about__subtitle">Yıl Deneyim</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-briefcase"></i>

        <div>
          <h3 className="about__title">20+</h3>
          <span className="about__subtitle">Proje</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon fas fa-code"></i>

        <div>
          <h3 className="about__title">3000+</h3>
          <span className="about__subtitle">Saat Kodlama</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon fas fa-folder-open"></i>

        <div>
          <h3 className="about__title">Onlarca</h3>
          <span className="about__subtitle">Kişisel Proje</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;