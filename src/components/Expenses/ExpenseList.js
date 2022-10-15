import React from "react";
import Expense from "./Expense";
import './ExpenseList.css'

const ExpenseList=(props)=>{
    if(props.items.length===0){
    return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
}
return(
    <ul className='expenses-list'>
       { props.items.map((expense) => (
          <Expense
            key={expense.id} //It is used so that react get to know about individual data when there are dublicates,basically after using this it does not allow to render the dublicate elements
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></Expense>
        ))}
        </ul>
)
       };
        export default ExpenseList;