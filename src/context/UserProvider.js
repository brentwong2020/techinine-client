import React, { createContext, useReducer } from 'react';
import { USER_LOGIN, USER_LOGOUT } from '../constants';
import config from '../config/index.js';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function reducer(state, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isAuthenticated: true, userInfo: action.value.userInfo }

    case USER_LOGOUT:
      return { ...state, isAuthenticated: false, userInfo: {} }

    default: {
      throw new Error('Invalid Action', action.type);
    }
  }
}

const initState = {
  isAuthenticated: cookies.get('isAuthenticated') ?? false,
  userInfo: cookies.get('userInfo') ?? {},
}

const userStateContext = createContext({});
const userFunctionContext = createContext({});

function useUserState() {
  let context = React.useContext(userStateContext);
  if (context === undefined) {
    throw new Error('Error in User State(*Inside provider Layer)');
  }
  return context;
}

function useUserFunction() {
  let context = React.useContext(userFunctionContext);
  if (context === undefined) {
    throw new Error('Error in User Dispatch(*Inside provider Layer)');
  }
  return context;
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  function userLogout() {
    dispatch({ type: USER_LOGOUT });
  }

  function userLogin(username, password) {
    return axios.post(config.loginUrl, {
      username,
      password
    }).then((res) => {
      dispatch({ type: USER_LOGIN, value: res.data });
      return true;
    }).catch((res) => {
      return false;
    })
  }

  const func = { userLogout, userLogin }

  return (
    <userStateContext.Provider value={state}>
      <userFunctionContext.Provider value={func}>
        {children}
      </userFunctionContext.Provider>
    </userStateContext.Provider>
  )
}

export {
  useUserFunction,
  useUserState,
};

export default UserProvider;