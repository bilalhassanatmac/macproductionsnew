import "./serviceCard.scss";
import React from 'react';

const ServiceCard = ({greenIcon ,image, name, info}) => {
  return (
    <div class="card-container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <span class="stars"></span>
            <img src={image}/>
            <p class="card-text">{info}</p>
          </div>
        </div>
        <div class="face face2">
          <img src={greenIcon} alt="" />
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;