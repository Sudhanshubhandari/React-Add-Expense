import React,{useState} from "react";
import "./ExpenseForm.css"
const ExpenseForm=(props)=>{

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    } 


    // const titleChangeHandler=(event)=>{ //Whatever we type in input it will display on console terminal
    //     console.log(event.target.value); 
    // }

    //After form submission
    const submitHandler=(event)=>{
        event.preventDefault();//used so that page doen not refresh automatically
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        //console.log(expenseData)
        //sending information to parent i.e> to newExpense.js
        props.onSaveExpenseData(expenseData)
        //After form is submitted text form should be cleared 
        //THIS IS ALSO CALLED TWO WAY BINDIND
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle /*to set the value default after submiting*/} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
}
export default ExpenseForm