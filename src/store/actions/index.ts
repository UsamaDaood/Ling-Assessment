import { User } from '../reducers/leaderboardReducer';

export const SET_USERS = 'SET_USERS';
export const SET_SEARCH_USER = 'SET_SEARCH_USER';
export const SET_ERROR = 'SET_ERROR';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SHOW_LOWEST_RANKED = 'SHOW_LOWEST_RANKED';

export const setUsers = (users: User[]) => ({
  type: SET_USERS,
  payload: users,
});

export const setSearchUser = (username: string) => ({
  type: SET_SEARCH_USER,
  payload: username,
});

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: error,
});

export const sortByName = () => ({
  type: SORT_BY_NAME,
});

export const showLowestRanked = () => ({
  type: SHOW_LOWEST_RANKED,
});
