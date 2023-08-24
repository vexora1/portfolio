import React from 'react';
import "./services.css";

const data = [
  {
    id: 1,
    icon: "fa-solid fa-pen-ruler",
    title: "UI/UX Tasarım",
    description:
      "Kullanıcı dostu ve estetik tasarımlar ile kullanıcı deneyimini en üst seviyeye çıkarırım.",
  },
  {
    id: 2,
    icon: "fa-solid fa-code",
    title: "Web Geliştirme",
    description:
      "Modern ve dinamik web siteleri geliştirerek kullanıcıların ihtiyaçlarını karşılarım."
  },
  {
    id: 3,
    icon: "bx bx-support",
    title: "Satış Sonrası Destek",
    description:
      "Projenin bitiminden sonra 3 ay boyunca ücretsiz destek sağlar ve hata oluşması durumunda hızlı bir şekilde çözüm üretirim.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Hizmetler</h2>

      <div className="services__container grid">
        {data.map(({ id, icon, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <span className='services__icon' >
                <i className={icon}></i>
              </span>

              <div className="services__info">
                <h3 className="services__title">{title}</h3>
                <p className="services__description">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;