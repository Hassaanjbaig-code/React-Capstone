/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { stockdata } from '../redux/Stock-data/stock';
import { IC } from '../redux/Stock-data/IncomeStatement';
import { senddata } from '../redux/Stock-data/Storestock';
import './Home.css';

const handlefilter = (query, data) => {
  if (query.length === 0) {
    return data;
  }
  return data
    .filter((data) => data.companyName.toLowerCase().includes(query.toLowerCase()));
};

const Home = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.stock);
  useEffect(() => {
    if (show.data.length === 0) {
      dispatch(stockdata());
    }
  }, [dispatch, show.data.length]);
  const [filterdata, setFilterdata] = useState('');

  const filterItem = handlefilter(filterdata, show.data);
  const Singlestockdata = (symbol, companyName, price) => {
    dispatch(IC(symbol));
    const ouput = {
      symbol,
      companyName,
      price,
    };
    dispatch(senddata(ouput));
  };
  let count = 0;
  return (
    <div>
      <div className="Search">
        <input type="text" className="input-search" onChange={(e) => setFilterdata(e.target.value)} placeholder="Type company name" />
        <button type="submit" className="submit-search"><FiSearch /></button>
      </div>
      <ul className="Fetch-home">
        {filterItem.map((data) => {
          count += 1;
          return (
            <li id={data.volumn} key={count}>
              <div className="Main-data">
                <h2>{data.symbol}</h2>
                <NavLink to={`/details/:${data.symbol}/:${count}`}>
                  <button
                    type="button"
                    className="Button input-submit"
                    onClick={() => Singlestockdata(data.symbol, data.companyName, data.price)}
                  >
                    <BsBoxArrowInRight />
                  </button>
                </NavLink>
              </div>
              <div className="Fetch-footer">
                <h3 className="margin">{data.companyName}</h3>
                <p className="margin">
                  $
                  {data.price}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
