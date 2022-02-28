import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const initialMealState = {
  meals: [],
  menu: [],
  totalPrice: 0,
  isVegan: false,
  numberOfVegan: 0,
  healthScore: 0,
  readyInTime: 0,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: initialMealState,
  reducers: {
    setMealsList: (state, action) => {
      state.meals = action.payload;
    },
    setMenuList: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setMealsList, setMenuList } = menuSlice.actions;

export default menuSlice.reducer;

export const fetchAllMeals = () => (dispatch) => {
  axios
    .get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=cc735d7fe0a84d7ab8683a8d07882974&addRecipeInformation=true&number=16&query='
    )
    .then((response) => {
      dispatch(setMealsList(response.data.results));
    })
    .catch((error) => console.log(error));
};
