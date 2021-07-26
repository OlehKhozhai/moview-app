import { AppStore } from 'redux/store';
import { BASE_URL, DROPDOWN_OPTIONS_DEFINITION } from 'config';
import {
  GetMoviesSuccessAction,
  GET_MOVIES,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GetMoviesAction,
  SetCurrentTabAction,
  SET_ACTIVE_TAB,
  GetMovieDetailsAction,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAIL,
  GetMovieDetailsSuccessAction,
  GetMovieDetailsFailAction,
  GetMoviesFailAction,
  SET_ACTIVE_SORT_BY,
  SetCurrentSortByAction,
  CreateMovieAction,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAIL,
  CreateMovieSuccessAction,
  CreateMovieFailAction,
  CREATE_MOVIE,
  RemoveMovieAction,
  EditMovieAction,
  EditMovieFailAction,
  EditMovieSuccessAction,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAIL,
  EDIT_MOVIE,
  RemoveMovieSuccessAction,
  REMOVE_MOVIE_FAIL,
  RemoveMovieFailAction,
  REMOVE_MOVIE,
  REMOVE_MOVIE_SUCCESS,
} from 'redux/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dispatch = any; // ToDo need to find the proper type

export const setActiveTabAction =
  (tab: SetCurrentTabAction['payload']) => (dispatch: Dispatch, getStore: () => AppStore) => {
    const store = getStore();

    dispatch({
      type: SET_ACTIVE_TAB,
      payload: tab,
    });

    dispatch(
      getMoviesAction({
        searchBy: 'genres',
        search: tab === 'all' ? '' : tab,
        sortBy: store.sortBy,
      })
    );
  };

export const setActiveSortByAction =
  (sortBy: SetCurrentSortByAction['payload']) => (dispatch: Dispatch, getStore: () => AppStore) => {
    const store = getStore();

    dispatch({
      type: SET_ACTIVE_SORT_BY,
      payload: DROPDOWN_OPTIONS_DEFINITION[sortBy],
    });

    dispatch(
      getMoviesAction({
        searchBy: store.activeTab === 'all' ? '' : 'genres',
        search: store.activeTab === 'all' ? '' : store.activeTab,
        sortBy: DROPDOWN_OPTIONS_DEFINITION[sortBy],
      })
    );
  };

export const getMoviesAction =
  ({ search = '', searchBy = '', sortBy }: GetMoviesAction['payload']) =>
  (dispatch: Dispatch) => {
    dispatch({ type: GET_MOVIES });

    fetch(`${BASE_URL}?search=${search}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc`)
      .then((res) => res.json())
      .then(({ data }) => {
        dispatch({
          type: GET_MOVIES_SUCCESS,
          payload: data,
        } as GetMoviesSuccessAction);
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIES_FAIL,
          payload: error,
        } as GetMoviesFailAction);
      });
  };

export const getMovieDetailsAction =
  (id: GetMovieDetailsAction['payload']) => (dispatch: Dispatch) => {
    dispatch({
      type: GET_MOVIE_DETAILS,
      payload: id,
    } as GetMovieDetailsAction);

    fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .then((movie) => {
        dispatch({
          type: GET_MOVIE_DETAILS_SUCCESS,
          payload: movie,
        } as GetMovieDetailsSuccessAction);
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIE_DETAILS_FAIL,
          payload: error,
        } as GetMovieDetailsFailAction);
      });
  };

export const createMovieAction = (movie: CreateMovieAction['payload']) => (dispatch: Dispatch) => {
  dispatch({
    type: CREATE_MOVIE,
  });

  fetch(`${BASE_URL}`, { method: 'POST', body: JSON.stringify(movie) })
    .then((res) => res.json())
    .then((createdMovie) => {
      dispatch({
        type: CREATE_MOVIE_SUCCESS,
        payload: createdMovie,
      } as CreateMovieSuccessAction);
    })
    .catch((error) => {
      dispatch({
        type: CREATE_MOVIE_FAIL,
        payload: error,
      } as CreateMovieFailAction);
    });
};

export const editMovieAction = (movie: EditMovieAction['payload']) => (dispatch: Dispatch) => {
  dispatch({
    type: EDIT_MOVIE,
  });

  fetch(`${BASE_URL}`, { method: 'PUT', body: JSON.stringify(movie) })
    .then((res) => res.json())
    .then((updatedMovie) => {
      dispatch({
        type: EDIT_MOVIE_SUCCESS,
        payload: updatedMovie,
      } as EditMovieSuccessAction);
    })
    .catch((error) => {
      dispatch({
        type: EDIT_MOVIE_FAIL,
        payload: error,
      } as EditMovieFailAction);
    });
};

export const removeMovieAction = (id: RemoveMovieAction['payload']) => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_MOVIE,
  });

  fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then(() => {
      dispatch({
        type: REMOVE_MOVIE_SUCCESS,
      } as RemoveMovieSuccessAction);
    })
    .catch((error) => {
      dispatch({
        type: REMOVE_MOVIE_FAIL,
        payload: error,
      } as RemoveMovieFailAction);
    });
};
