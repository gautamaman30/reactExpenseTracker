import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ListTransaction } from './ListTransactions';


export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return(
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map( transaction => (<ListTransaction transaction={transaction}/>))}
      </ul>
    </>
  );
}
