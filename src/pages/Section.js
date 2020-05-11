import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Section.css';
import dogIcon from '../assets/static/dogIcon.png';
import catIcon from '../assets/static/catIcon.png';
import fishIcon from '../assets/static/fishIcon.png';
import birdIcon from '../assets/static/birdIcon.png';
import reptileIcon from '../assets/static/reptileIcon.png';
import mammalIcon from '../assets/static/mamalIcon.png';
import seeAllIcon from '../assets/static/seeAll.png';
import SectionProducts from '../components/SectionProducts';

const Section = ({ match }) => {
  const getSection = (name) => {
    switch (name) {
      case 'toys':
        return 'Juguetes';
      case 'food':
        return 'Comida';
      case 'clothes':
        return 'Ropa';
      case 'medic':
        return 'Servicios Médicos';
      default:
        return '';
    }
  };

  const getPet = (pet) => {
    switch (pet) {
      case 'birds':
        return ' - Aves';
      case 'cats':
        return ' - Gatos';
      case 'mammals':
        return ' - Mamíferos';
      case 'dogs':
        return ' - Perros';
      case 'fish':
        return ' - Peces';
      case 'reptiles':
        return ' - Reptiles';
      default:
        return '';
    }
  };

  const Title = ({ name, pet }) => {
    const sectionName = getSection(name);
    const sectionPet = getPet(pet);

    return <h2 className="Section__title">{`${sectionName}${sectionPet}`}</h2>;
  };

  const Filter = ({name}) => {
    if (name !== 'medic') {
      return (
        <div className="Section__filter">
          <span className="Section__filter__description">
            Filtra por tipo de mascota
          </span>
          <div className="Section__filter__options">
            <Link
              to={`/section/${match.params.name}/birds`}
              className="Section__filter__option"
            >
              <img
                className="Section__filter__option__img"
                src={`/${birdIcon}`}
              />
              <span className="Section__filter__option__pet">Aves</span>
            </Link>
            <Link
              to={`/section/${match.params.name}/cats`}
              className="Section__filter__option"
            >
              <img
                className="Section__filter__option__img"
                src={`/${catIcon}`}
              />
              <span className="Section__filter__option__pet">Gatos</span>
            </Link>
            <Link
              to={`/section/${match.params.name}/mammals`}
              className="Section__filter__option"
            >
              <img
                className="Section__filter__option__img"
                src={`/${mammalIcon}`}
              />
              <span className="Section__filter__option__pet">Mamíferos</span>
            </Link>
            <Link
              to={`/section/${match.params.name}/dogs`}
              className="Section__filter__option"
            >
              <img
                className="Section__filter__option__img"
                src={`/${dogIcon}`}
              />
              <span className="Section__filter__option__pet">Perros</span>
            </Link>
            <Link
              to={`/section/${match.params.name}/fish`}
              className="Section__filter__option"
            >
              <img
                className="Section__filter__option__img"
                src={`/${fishIcon}`}
              />
              <span className="Section__filter__option__pet">Peces</span>
            </Link>
            <Link
              to={`/section/${match.params.name}/reptiles`}
              className="Section__filter__option"
            >
              <img
                className="Section__filter__option__img"
                src={`/${reptileIcon}`}
              />
              <span className="Section__filter__option__pet">Reptiles</span>
            </Link>
            <Link
              to={`/section/${match.params.name}`}
              className="Section__filter__option"
            >
              <img
                className="Section__filter__option__img"
                src={`/${seeAllIcon}`}
              />
              <span className="Section__filter__option__pet">Todos</span>
            </Link>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Section">
      <Title name={match.params.name} pet={match.params.pet} />
      <Filter name={match.params.name} />
      <SectionProducts section={match.params.name} pet={match.params.pet} />
    </div>
  );
};

export default Section;
