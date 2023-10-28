"use client";
import React, { createContext, useContext, useReducer } from "react";

export const StoreContext = createContext();

// Reducer function
const setUserData = (state, action) => {
  switch (action.type) {
    case "SET_User":
      return { ...state, userNumber: action.payload };
    case "set_name":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

const initialState = {
  userNumber: "3456789",
  userName: "12",
};

// Context provider component
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(setUserData, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = () => {
  return useContext(StoreContext);
};
