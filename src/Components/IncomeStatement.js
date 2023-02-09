import React from 'react';
import { useSelector } from 'react-redux';
import './IncomeStatement.css';

const IncomeStatement = () => {
  let count = 0;
  const show = useSelector((data) => data.IncomeStatement);
  return (
    <div>
      {show.data.map((state) => {
        count += 1;
        return (
          <div key={count} className="Company-Income">
            <h2>
              {state.symbol}
              {' '}
              Income Statement
            </h2>
            <div className="Company-all-Cost">
              <h4>
                <span>Cost of Revenue</span>
                {' '}
                $
                {state.costOfRevenue}
              </h4>
              <h4>
                {' '}
                <span>Cost and Expenses</span>
                {' '}
                $
                {state.costAndExpenses}
              </h4>
              <h4>
                <span>Gross Profit</span>
                {' '}
                $
                {state.grossProfit}
              </h4>
              <h4>
                {' '}
                <span>Net Income</span>
                {' '}
                $
                {state.netIncome}
              </h4>
              <h4>
                <span>Revenue</span>
                {' '}
                $
                {state.revenue}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IncomeStatement;
