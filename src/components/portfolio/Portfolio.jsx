import React from 'react';
import "./portfolio.css"
import WorkItems from './WorkItems';

const Portfolio = () => {
  return (
    <section className='work container section' id='work'>
      <h2 className="section__title">Son Projeler</h2>

      <div className="work__container grid nocursor">
        {WorkItems.map(item => {
          const { id, image, title, category } = item;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt={title} className='work__img' />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;