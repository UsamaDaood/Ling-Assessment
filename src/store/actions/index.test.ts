import { setUsers, setSearchUser, setError, sortByName, showLowestRanked } from './index';
import { User } from '../reducers/leaderboardReducer';

describe('Actions', () => {
  it('should create an action to set users', () => {
    const users: User[] = [{ uid: '1', name: 'John Doe', bananas: 10, lastDayPlayed: '', longestStreak: 1, stars: 1, subscribed: false }];
    const expectedAction = {
      type: 'SET_USERS',
      payload: users,
    };
    expect(setUsers(users)).toEqual(expectedAction);
  });

  it('should create an action to set search user', () => {
    const username = 'John Doe';
    const expectedAction = {
      type: 'SET_SEARCH_USER',
      payload: username,
    };
    expect(setSearchUser(username)).toEqual(expectedAction);
  });

  it('should create an action to set error', () => {
    const error = 'Error message';
    const expectedAction = {
      type: 'SET_ERROR',
      payload: error,
    };
    expect(setError(error)).toEqual(expectedAction);
  });

  it('should create an action to sort by name', () => {
    const expectedAction = {
      type: 'SORT_BY_NAME',
    };
    expect(sortByName()).toEqual(expectedAction);
  });

  it('should create an action to show lowest ranked', () => {
    const expectedAction = {
      type: 'SHOW_LOWEST_RANKED',
    };
    expect(showLowestRanked()).toEqual(expectedAction);
  });
});
