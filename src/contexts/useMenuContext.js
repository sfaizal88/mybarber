/**
 * 
 * Menu context
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import { createContext } from 'react';


// ROUTER IMPORT
import * as PATH from '../view/routes/constants';

const selectedMenuId = localStorage.getItem("selectedMenuId") || PATH.HOME_PATH;

// CONSTANT
export const MENU_ACTION_TYPE = {
  UPDATE: 'UPDATE'
} 

// INITIAL STATE
export const menuInitialState = {
    value: selectedMenuId,
};

// CREATE CONTEXT
export const menuContext = createContext();


// REDUCER FUNCTION
export const menuReducer = (state, action) => {
    switch (action.type) {
      case MENU_ACTION_TYPE.UPDATE:
        localStorage.setItem("selectedMenuId", action.payload);
        return { ...state, value: action.payload };
      default:
        return state;
    }
};
  