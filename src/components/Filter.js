import React from 'react';
import '../assets/styles/components/Filter.css';
import dogIcon from '../assets/static/dogIcon.png';
import catIcon from '../assets/static/catIcon.png';
import fishIcon from '../assets/static/fishIcon.png';
import birdIcon from '../assets/static/birdIcon.png';
import reptileIcon from '../assets/static/reptileIcon.png';
import mamalIcon from '../assets/static/mamalIcon.png';
import eraseIcon from '../assets/static/eraseIcon.png';

const Filter = () => (
    <div>
        <p className="filter-legend">FILTRA POR TIPO DE MASCOTA</p>

        <nav className="filter">
            <ul className="filter-list">
                <div className="filter-item">
                    <img src={birdIcon}></img>
                    <a>Aves</a>
                </div>

                <div className="filter-item">
                    <img src={catIcon}></img>
                    <a>Gatos</a>
                </div>

                <div className="filter-item">
                    <img src={mamalIcon}></img>
                    <a>Mamíferos</a>
                </div>


                <div className="filter-item">
                    <img src={dogIcon}></img>
                    <a>Perros</a>
                </div>

                <div className="filter-item">
                    <img src={fishIcon}></img>
                    <a>Peces</a>
                </div>

                <div className="filter-item">
                    <img src={reptileIcon}></img>
                    <a>Reptiles</a>
                </div>

                <div className="filter-item">
                    <img src={eraseIcon}></img>
                    <a>Borrar Filtro</a>
                </div>
            </ul>
        </nav>
    </div>
)


export default Filter;