import React from 'react';
import '../assets/styles/components/ListOfCards.css';
import SectionProducts from './SectionProducts';

export default function ListOfCards({ title, id }) {
  return (
    <section>
      <div className={`cards__title ${id}`}>
        <h2>{title}</h2>
      </div>
      <div className="cards">
        <SectionProducts section={id} page='Home' />
      </div>
    </section>
  );
}
