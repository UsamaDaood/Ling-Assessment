import leaderboardReducer, { LeaderboardState, User } from './leaderboardReducer';
import { setUsers, setSearchUser, setError, sortByName, showLowestRanked } from '../actions';

describe('Leaderboard Reducer', () => {
  const initialState: LeaderboardState = {
    users: [],
    searchUser: '',
    error: null,
  };

  const users: User[] = [
    { uid: '1', name: 'John Doe', bananas: 10, lastDayPlayed: '', longestStreak: 1, stars: 1, subscribed: false },
    { uid: '2', name: 'Jane Smith', bananas: 20, lastDayPlayed: '', longestStreak: 1, stars: 1, subscribed: false },
  ];

  it('should return the initial state', () => {
    expect(leaderboardReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle SET_USERS', () => {
    const action = setUsers(users);
    expect(leaderboardReducer(initialState, action)).toEqual({
      ...initialState,
      users,
    });
  });

  it('should handle SET_SEARCH_USER', () => {
    const action = setSearchUser('John Doe');
    expect(leaderboardReducer(initialState, action)).toEqual({
      ...initialState,
      searchUser: 'John Doe',
    });
  });

  it('should handle SET_ERROR', () => {
    const action = setError('Error message');
    expect(leaderboardReducer(initialState, action)).toEqual({
      ...initialState,
      error: 'Error message',
    });
  });

  it('should handle SORT_BY_NAME', () => {
    const stateWithUsers = { ...initialState, users };
    const action = sortByName();
    expect(leaderboardReducer(stateWithUsers, action)).toEqual({
      ...stateWithUsers,
      users: users.sort((a, b) => a.name.localeCompare(b.name)),
    });
  });

  it('should handle SHOW_LOWEST_RANKED', () => {
    const stateWithUsers = { ...initialState, users };
    const action = showLowestRanked();
    expect(leaderboardReducer(stateWithUsers, action)).toEqual({
      ...stateWithUsers,
      users: users.sort((a, b) => a.bananas === b.bananas ? a.name.localeCompare(b.name) : a.bananas - b.bananas),
    });
  });
});
