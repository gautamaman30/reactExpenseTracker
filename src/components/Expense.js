import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const Expense = () => {
  const { transactions} = useContext(GlobalContext);
  const income = transactions.reduce((sum, item) => sum + (item.amount > 0?item.amount: 0), 0).toFixed(2);
  const expense = transactions.reduce((sum, item) => sum + (item.amount < 0?item.amount: 0), 0).toFixed(2)*-1;


  return(
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
}
