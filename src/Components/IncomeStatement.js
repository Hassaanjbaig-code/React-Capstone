import React, { useEffect } from 'react';
import { IC } from '../redux/Stock-data/IncomeStatement';
import { useDispatch, useSelector } from 'react-redux';
import './IncomeStatement.css';

const IncomeStatement = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(IC());
    }, [dispatch])

    const show = useSelector(data => data.IncomeStatement)
  return (
    <div>
        {show.data.map((state) => (
            <div className="Company-Income">
            <h2>{state.symbol}</h2>
            <div className="Company-all-Cost">
                <h4><span>Cost of Revenue</span>  {state.costOfRevenue}</h4>
                <h4> <span>Cost and Expenses</span> {state.costAndExpenses}</h4>
                <h4><span>Gross Profit</span> {state.grossProfit}</h4>
                <h4> <span>Net Income</span> {state.netIncome}</h4>
                <h4><span>Revenue</span> {state.revenue}</h4>
            </div>
            </div>
        ))}
    </div>
  )
}

export default IncomeStatement
