import React from 'react';
import { useSelector } from 'react-redux';
import './IncomeStatement.css';
import { BsBoxArrowInRight } from 'react-icons/bs';

const IncomeStatement = () => {
  let count = 0;
  const show = useSelector((data) => data.IncomeStatement);
  const stockshow = useSelector((data) => data.boxStock.data);
  return (
    <div>
      <div className="Stock-single-main-data">
        <div className="Stock-single-box">
          <div>
            <h2 className="Stock-single-heading">{stockshow.symbol}</h2>
          </div>
          <div className="Stock-single-footor">
            <h3 className="">{stockshow.companyName}</h3>
            <p className="">
              $
              {stockshow.price}
            </p>
          </div>
        </div>
      </div>
      {show.data.map((state) => {
        count += 1;
        return (
          <div key={count} className="Company-Income">
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
