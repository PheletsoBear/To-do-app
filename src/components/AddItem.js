import React, {useState} from "react";
import "../components/css/AddItem.css"
function AddItem(props){
 //my variables
    const [amout, setAmount] = useState('')
    const [item, setItem] = useState("");
    const [transactionType, settransactionType] = useState("");


    //setting inputs
    const add = (() => {
       
      props.add(amout, item, transactionType);
 
    })



    return(
       <div className="main">

           <div className="container">
            <h1 style={{paddingTop:"5px",paddingLeft:"25px"}}>Add transaction</h1>
           <input  placeholder="Enter Item" onChange={(e)=> setItem(e.target.value)} /><br></br>
            <input placeholder="Enter Amount" onChange={(e)=> setAmount(e.target.value)}/><br></br>
           
            <select onChange={(e)=> settransactionType(e.target.value)}>
              <option>Select transaction </option>
                   <option value="Income">Income</option>
                   <option value="Expense">Expense</option>
                   <option value="Equity">Equity</option>

            </select><br></br>
    
            <button id="btn" onClick={add}>add</button>
           </div>
    
            

       </div>

    )
    
}

export default AddItem;