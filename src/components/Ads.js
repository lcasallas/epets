import React from 'react'
import '../assets/styles/base_styles.css'
import '../assets/styles/Ads.css'

import servicios from '../assets/static/servicios.jpg';
import pedigree from '../assets/static/pedigree.jpg';

const Ads = () => (
  <div>
    <div className="carousel">
      <ul className="slides">
        <input type="radio" name="radio-buttons" id="img-1" checked />
        <li className="slide-container">
          <div className="slide-image">
            <img src={servicios} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-3" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-2" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-2" />
        <li className="slide-container">
          <div className="slide-image">
            <img src={pedigree} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-1" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-3" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-3" />
        <div className="carousel-dots">
          <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
          <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
        </div>
      </ul>
    </div>
  </div>
)

export default Ads
