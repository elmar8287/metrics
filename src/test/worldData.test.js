import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import WorldData from '../components/WorldData';

describe('Home page render correctly', () => {
  test('Home component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <WorldData />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
