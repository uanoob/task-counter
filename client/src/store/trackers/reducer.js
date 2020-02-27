import {
  FETCH_TRACKERS,
  ADD_TRACKER,
  REMOVE_TRACKER,
} from './types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACKERS:
      return { ...state, data: action.payload };
    case ADD_TRACKER:
      return { ...state, data: [...state.data, action.payload] };
    case REMOVE_TRACKER:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
