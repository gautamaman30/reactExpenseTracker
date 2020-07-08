import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Expense } from './components/Expense';
import { TransactionList } from './components/Transaction';
import { AddTransaction } from './components/NewTransactions';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <div className="bigContainer">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <Expense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
