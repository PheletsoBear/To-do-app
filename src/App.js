import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [transaction, setTransaction]= useState([]);
 
  const addTransaction= ((amount, item, transactionType)=>{
    
 setTransaction ((component)=> [...component, {
   id:component.length,
   amount: amount,
   item: item,
   transactionType: transactionType
 
 }])
 console.log(transaction)
 })
 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/Sign-Up" component={SignUp}></Route>
        <Route path="/Home">
      <Home add={addTransaction} list={transaction}/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
