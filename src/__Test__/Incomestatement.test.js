import React from 'react';
import '@testing-library/jest-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import IncomeStatement from '../Components/IncomeStatement';

test('should first', () => {
  const tree = renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <IncomeStatement />
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
