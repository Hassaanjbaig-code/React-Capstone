import React from 'react';
import '@testing-library/jest-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Home from '../Components/Home';

test('should first', async () => {
  const fetchd = await fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=48&apikey=41efa39e0c22f8d0149cc5c4406e677c', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await fetchd.json();
  expect(data.length).toBe(48);
});

test('should first', () => {
  const tree = renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
