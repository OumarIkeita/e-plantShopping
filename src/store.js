import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

/**
 * Redux Store Configuration
 * 
 * configureStore handles:
 * 1. Combining reducers (even if we only have one)
 * 2. Adding the Redux Thunk middleware by default
 * 3. Enabling the Redux DevTools extension automatically
 */
const store = configureStore({
    reducer: {
        // This maps the 'cart' state to the logic defined in CartSlice.jsx
        cart: cartReducer,
    },
});

export default store;