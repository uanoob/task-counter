import {
  ADD_TRACKER,
  REMOVE_TRACKER,
  FETCH_TRACKERS,
  UPDATE_TRACKER,
} from './types';

const fetchFromStorage = () => {
  const trackers = JSON.parse(localStorage.getItem('trackers'));
  return trackers;
};

const setStorage = trackers => {
  localStorage.setItem('trackers', JSON.stringify(trackers));
};

export const fetchTrackers = () => async dispatch => {
  const response = fetchFromStorage() || [];
  dispatch({
    type: FETCH_TRACKERS,
    payload: response,
  });
};

export const addTracker = tracker => async dispatch => {
  const response = fetchFromStorage() || [];
  setStorage([...response, tracker]);

  dispatch({
    type: ADD_TRACKER,
    payload: tracker,
  });
};

export const removeTracker = id => async dispatch => {
  const response = fetchFromStorage();
  if (response) {
    const filtered = response.filter(item => item.id !== id);
    setStorage([...filtered]);
  }

  dispatch({
    type: REMOVE_TRACKER,
    payload: id,
  });
};

export const updateTracker = tracker => dispatch => {
  const response = fetchFromStorage();
  if (response) {
    const updated = response.map(item => (item.id === tracker.id ? tracker : item));
    setStorage([...updated]);
  }

  dispatch({
    type: UPDATE_TRACKER,
    payload: tracker,
  });
};
