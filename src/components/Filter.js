import React from 'react';
import dogIcon from '../assets/static/dogIcon.png';
import catIcon from '../assets/static/catIcon.png';
import fishIcon from '../assets/static/fishIcon.png';
import birdIcon from '../assets/static/birdIcon.png';
import reptileIcon from '../assets/static/reptileIcon.png';
import mamalIcon from '../assets/static/mamalIcon.png';

const Filter = () => (
    <nav className="filter">
        <ul className="filter-list">
            <img src={birdIcon}></img>
            <li>Aves</li>
            <img src={catIcon}></img>
            <li>Gatos</li>
            <img src={mamalIcon}></img>
            <li>Mamíferos</li>
            <img src={dogIcon}></img>
            <li>Perros</li>
            <img src={fishIcon}></img>
            <li>Peces</li>
            <img src={reptileIcon}></img>
            <li>Reptiles</li>
        </ul>
    </nav>
)


export default Filter;