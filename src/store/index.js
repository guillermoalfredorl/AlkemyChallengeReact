import { configureStore } from '@reduxjs/toolkit';

import menu from '../context/menuContext';

export default configureStore({
  reducer: {
    menu,
  },
});
