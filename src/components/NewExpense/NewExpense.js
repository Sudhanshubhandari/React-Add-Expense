import React , {useState} from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
const NewExpense=(props)=>{

   //recieving information from parent to child i.e>from expenseform.js
   const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    // console.log(expenseData);
    //sending data to app.js
    props.onAddExpense(expenseData)
    }

    const[isEditing,setIsEditing]=useState(false)

    const startEditingHandler=()=>{
    setIsEditing(true)
    }
   const stopEditingHandler=()=>{
    setIsEditing(false)
   }



return(
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
     {isEditing && <ExpenseForm 
     onSaveExpenseData={saveExpenseDataHandler}
     onCancel={stopEditingHandler}/>}
    </div>
)
}
export default NewExpense