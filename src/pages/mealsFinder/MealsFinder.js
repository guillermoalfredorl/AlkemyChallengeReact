import React, { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Navbar from '../../components/navbar/Navbar';
import MealCard from '../../components/mealCard/MealCard';
import {
  fetchAllMeals,
  setMealsList,
  setMenuList,
} from '../../context/menuContext';

const MealsFinder = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.menu.meals);
  const menu = useSelector((state) => state.menu.menu);

  const searchInputRef = useRef();
  const url =
    'https://api.spoonacular.com/recipes/complexSearch?apiKey=cc735d7fe0a84d7ab8683a8d07882974&addRecipeInformation=true&number=16&query=';

  useEffect(() => {
    dispatch(fetchAllMeals());
  }, [dispatch]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredSearch = searchInputRef.current.value;

    axios
      .get(
        `${url} +
          ${enteredSearch} +
          &number=16`
      )
      .then((response) => {
        dispatch(setMealsList(response.data.results));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const addToMenuHandler = () => {
    dispatch(setMenuList());
    console.log(menu);
  };

  return (
    <div>
      <Navbar />
      <section className='search-bar my-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 mx-auto'>
              <form onSubmit={submitHandler}>
                <div>
                  <div className='input-group'>
                    <input
                      name='title'
                      type='search'
                      placeholder='Search Meal...'
                      className='form-control'
                      ref={searchInputRef}
                    />
                    <button type='button' className='btn btn-info'>
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row gy-3 my-3'>
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              image={meal.image}
              title={meal.title}
              summary={meal.summary}
              readyInMinutes={meal.readyInMinutes}
              healthScore={meal.healthScore}
              price={meal.pricePerServing}
              addToMenu={addToMenuHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealsFinder;
