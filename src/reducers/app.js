import {
  SET_USER,
} from '../actions/app';

// Initial state for app reducer
const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
