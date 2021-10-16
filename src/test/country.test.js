import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Country from '../components/Country';
import store from '../redux/configStore';

describe('Country component', () => {
  it('Country renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Country />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});