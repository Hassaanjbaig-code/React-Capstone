import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stockdata } from '../redux/Stock-data/stock';
import { NavLink } from 'react-router-dom';
import { IC } from '../redux/Stock-data/IncomeStatement';
import { FaAngleRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(stockdata());
    }, [dispatch])
    const show = useSelector(state => state.stock);
    let count = 0;
  return (
    <div>
        <h1>US Companies Stock Price</h1>
        <ul className='Fetch-home'>
        {show.data.map((data) => { 
            count = count + 1;
        return (
            <li id={data.volumn} key={count}>
                <h2>{data.symbol}</h2>
                <h3>{data.companyName}</h3>
                <div className="Fetch-footer">
                <div>
                    <p><span className='bold'>Price:</span> {data.price}</p>
                </div>
                <div className="align">
                    <p> <span className='bold'>Industry:</span> {data.industry}</p>
                </div>
                </div>
                <NavLink to='/IncomeStatement' >
                   <button type="button" className="Button input-submit" onClick={() => dispatch(IC(data.symbol))}><FaAngleRight /></button> 
                </NavLink>
            </li>
        )})}
        </ul>
    </div>
  )
}

export default Home
