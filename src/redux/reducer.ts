import {
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_FAIL,
  GET_MOVIE_DETAILS_SUCCESS,
  SET_ACTIVE_SORT_BY,
  CREATE_MOVIE,
  CREATE_MOVIE_FAIL,
  CREATE_MOVIE_SUCCESS,
  EDIT_MOVIE,
  EDIT_MOVIE_FAIL,
  EDIT_MOVIE_SUCCESS,
  REMOVE_MOVIE,
  REMOVE_MOVIE_SUCCESS,
  REMOVE_MOVIE_FAIL,
} from './types';
import { DROPDOWN_OPTIONS, TABS } from 'config';
import { ActionTypes, GET_MOVIES, RootReducer, SET_ACTIVE_TAB } from 'redux/types';

const initialState: RootReducer = {
  activeTab: TABS[0],
  sortBy: DROPDOWN_OPTIONS[0],
  movies: [],
  isMoviesLoading: false,
  movieDetails: null,
  error: '',
};

export default (state = initialState, action: ActionTypes): RootReducer => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };

    case SET_ACTIVE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case GET_MOVIES:
      return {
        ...state,
        isMoviesLoading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isMoviesLoading: false,
      };
    case GET_MOVIES_FAIL:
      return {
        ...state,
        movies: [],
        isMoviesLoading: false,
        error: action.payload,
      };

    case GET_MOVIE_DETAILS:
      return state;
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case GET_MOVIE_DETAILS_FAIL:
      return {
        ...state,
        movieDetails: null,
        error: action.payload,
      };

    case CREATE_MOVIE:
    case EDIT_MOVIE:
    case REMOVE_MOVIE:
    case CREATE_MOVIE_SUCCESS:
    case EDIT_MOVIE_SUCCESS:
    case REMOVE_MOVIE_SUCCESS:
      return state;
    case CREATE_MOVIE_FAIL:
    case EDIT_MOVIE_FAIL:
    case REMOVE_MOVIE_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
