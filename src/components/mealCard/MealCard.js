import React from 'react';
import './mealCard.module.css';

const MealCard = (props) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3'>
      <div className='card'>
        <img className='card-img-top' src={props.image} alt='Card cap' />
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>{props.summary}</p>
          <div className='d-flex justify-content-between mb-2 mx-2'>
            <small className='text-muted'>{props.readyInMinutes}</small>
            <small className='text-muted'>{props.healthScore}</small>
            <small className='text-muted'>{props.price}</small>
          </div>
          <div className='d-flex justify-content-between gap-2 '>
            <button type='button' className='btn btn-outline-success'>
              Add to Menu
            </button>

            <button
              type='button'
              className='btn btn-outline-danger'
              onClick={props.seeDetails}
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
