import React from 'react';
import './css/DisplayTransaction.css'

function DisplayTransaction(props) {
    return(
  <div>
         {props.list.map((component) =>(
          
             <div className='transaction-item'>
                <div key={component.id}>
                <div>
                   <h4 style={{paddingLeft:"12px", paddingTop:"25px"}}>item: {component.item}</h4>
                 </div>
                
                 <div>
                  <h4 style={{paddingLeft: "290px", marginTop: "-16px"}}>R{component.amount}-00</h4>
                 </div>
                 

                </div>
                <div className={component.transactionType}></div>
            
             </div>

            
         ))}
  </div>

    );
    
}
export default DisplayTransaction;