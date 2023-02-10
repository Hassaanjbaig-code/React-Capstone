import React from 'react';
import { useSelector } from 'react-redux';
import './IncomeStatement.css';
import { BsBoxArrowInRight } from 'react-icons/bs';

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
                <span className="Value">
                  $
                  { state.costOfRevenue }
                  <BsBoxArrowInRight className="IC-icone" />
                </span>
              </h4>
              <h4>
                {' '}
                <span>Cost and Expenses</span>
                {' '}
                <span className="Value">
                  $
                  {state.costAndExpenses}
                  <BsBoxArrowInRight className="IC-icone" />
                </span>
              </h4>
              <h4>
                <span>Gross Profit</span>
                {' '}
                <span className="Value">
                  $
                  {state.grossProfit}
                  <BsBoxArrowInRight className="IC-icone" />
                </span>
              </h4>
              <h4>
                {' '}
                <span>Net Income</span>
                {' '}
                <span className="Value">
                  $
                  {state.netIncome}
                  <BsBoxArrowInRight className="IC-icone" />
                </span>
              </h4>
              <h4>
                <span>Revenue</span>
                {' '}
                <span className="Value">
                  $
                  {state.revenue}
                  <BsBoxArrowInRight className="IC-icone" />
                </span>
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IncomeStatement;
