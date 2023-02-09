/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { stockdata } from '../redux/Stock-data/stock';
import { IC } from '../redux/Stock-data/IncomeStatement';
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
  useEffect(() => {
    dispatch(stockdata());
  }, [dispatch]);
  const show = useSelector((state) => state.stock);
  const [filterdata, setFilterdata] = useState('');
  const filterItem = handlefilter(filterdata, show.data);
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
                  <button type="button" className="Button input-submit" onClick={() => dispatch(IC(data.symbol))}><FaAngleRight /></button>
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
