import React, { useEffect } from 'react';
import '../assets/styles/components/Filter.css';
import dogIcon from '../assets/static/dogIcon.png';
import catIcon from '../assets/static/catIcon.png';
import fishIcon from '../assets/static/fishIcon.png';
import birdIcon from '../assets/static/birdIcon.png';
import reptileIcon from '../assets/static/reptileIcon.png';
import mamalIcon from '../assets/static/mamalIcon.png';
import eraseIcon from '../assets/static/eraseIcon.png';

export default function Filter() {

useEffect( () => {
    async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
    }
    
getData()
}, [])

    return (
        <div>
            <p className='filter-legend'>FILTRA POR TIPO DE MASCOTA</p>

            <nav className='filter'>
            <ul className='filter-list'>
                <button className='filter-item'>
                <img src={birdIcon}></img>
                <p>Aves</p>
                </button>

                <button className='filter-item'>
                <img src={catIcon}></img>
                <p>Gatos</p>
                </button>

                <button className='filter-item'>
                <img src={mamalIcon}></img>
                <p>Mamíferos</p>
                </button>

                <button className='filter-item'>
                <img src={dogIcon}></img>
                <p>Perros</p>
                </button>

                <button className='filter-item'>
                <img src={fishIcon}></img>
                <p>Peces</p>
                </button>

                <button className='filter-item'>
                <img src={reptileIcon}></img>
                <p>Reptiles</p>
                </button>

                <button className='filter-item'>
                <img src={eraseIcon}></img>
                <p>Borrar Filtro</p>
                </button>
            </ul>
            </nav>
        </div>
    )
}