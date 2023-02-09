import React from 'react';
import '@testing-library/jest-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Components/Header';
import store from '../redux/Store';

describe('test/navbar', () => {
  test('should first', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
