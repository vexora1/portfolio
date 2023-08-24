import React from 'react';
import "./pricing.css"
import Image1 from "../../assets/price-1.svg"
import Image2 from "../../assets/price-2.svg"
import Image3 from "../../assets/price-3.svg"

const Pricing = () => {
  return (
    <section className="pricing container section" id='pricing'>
      <h2 className="section__title">Fiyatlandırma</h2>
      
      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={Image1} className='pricing__img' />
          <h2 className="pricing__plan">Temel</h2>
          <p className="pricing__title">
            Özel web sitesi, satış sonrası destek, bütçe dostu ve başlangıç için uygun.
          </p>
          <h3 className="price">
            1299 <em>₺</em>
          </h3>
        </div>

        <div className="pricing__item best">
          <span className="badge">Önerilen</span>
          <img src={Image2} className='pricing__img' />
          <h2 className="pricing__plan">Standart</h2>
          <p className="pricing__title">
            Özel entegrasyonlar ve özellikler, öncelikli destek ve fazlasıyla daha gelişmiş bir deneyim.
          </p>
          <h3 className="price">
            1799 <em>₺</em>
          </h3>
        </div>

        <div className="pricing__item">
          <img src={Image3} className='pricing__img' />
          <h2 className="pricing__plan">Premium</h2>
          <p className="pricing__title">
            Gelişmiş özellikler, özel entegrasyonlar, öncelikli destek ve çok daha fazlasıyla işinizi büyütün.
          </p>
          <h3 className="price">
            2499 <em>₺</em>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Pricing;