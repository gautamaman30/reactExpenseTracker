import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';


export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  //creating states using hooks [name, function for its functionality],
  //useState(default value)
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const onSubmit = e => {
    e.preventDefault();
    if(text !== '') addTransaction({id:Math.floor(Math.random()*10000000), text, amount: +amount});
  };

  return(
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
          placeholder="Enter text...." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br/>(negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount...."/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
