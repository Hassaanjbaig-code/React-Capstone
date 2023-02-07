import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stockdata } from '../redux/Stock-data/stock';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(stockdata());
    }, [dispatch])
    const show = useSelector(state => state.stock);
  return (
    <div>
        <ul className='Fetch-home'>
        {show.data.map((data) => (
            <li id={data.volumn} key={data.volumn}>
                <h2>{data.symbol}</h2>
                <h3>{data.companyName}</h3>
                <div>
                    <h5>{data.price}</h5>
                    <p>{data.industry}</p>
                </div>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Home
