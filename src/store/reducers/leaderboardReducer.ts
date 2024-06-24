import { AnyAction } from 'redux';
import { SET_USERS, SET_SEARCH_USER, SET_ERROR, SORT_BY_NAME, SHOW_LOWEST_RANKED } from '../actions';

interface User {
  uid: string;
  name: string;
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  stars: number;
  subscribed: boolean;
}

interface LeaderboardState {
  users: User[];
  searchUser: string;
  error: string | null;
}

const initialState: LeaderboardState = {
  users: [],
  searchUser: '',
  error: null,
};

const leaderboardReducer = (state = initialState, action: AnyAction): LeaderboardState => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_SEARCH_USER:
      return { ...state, searchUser: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SORT_BY_NAME:
      return { ...state, users: [...state.users].sort((a, b) => a.name.localeCompare(b.name)) };
    case SHOW_LOWEST_RANKED:
      return { ...state, users: [...state.users].sort((a, b) => a.bananas === b.bananas ? a.name.localeCompare(b.name) : a.bananas - b.bananas) };
    default:
      return state;
  }
};

export type { User, LeaderboardState };
export default leaderboardReducer;
