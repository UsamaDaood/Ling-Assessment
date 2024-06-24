import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);
const initialState = {
  leaderboard: {
    users: [],
    searchUser: '',
    error: null,
  },
};

describe('App Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render correctly', () => {
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByPlaceholderText('Enter username')).toBeTruthy();
    expect(getByText('Search')).toBeTruthy();
    expect(getByText('Sort by Name')).toBeTruthy();
    expect(getByText('Show Lowest Ranked')).toBeTruthy();
  });

  it('should dispatch setSearchUser on search button click', () => {
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    fireEvent.changeText(getByPlaceholderText('Enter username'), 'John Doe');
    fireEvent.press(getByText('Search'));

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: 'SET_SEARCH_USER',
      payload: 'John Doe',
    });
  });

  it('should dispatch sortByName on sort by name button click', () => {
    const {getByText} = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    fireEvent.press(getByText('Sort by Name'));

    const actions = store.getActions();
    expect(actions).toContainEqual({type: 'SORT_BY_NAME'});
  });

  it('should dispatch showLowestRanked on show lowest ranked button click', () => {
    const {getByText} = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    fireEvent.press(getByText('Show Lowest Ranked'));

    const actions = store.getActions();
    expect(actions).toContainEqual({type: 'SHOW_LOWEST_RANKED'});
  });
});
