import React, { useState } from "react";
import Expense from "./Expense.js";
import "./ExpensesS.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js";
import ExpensesChart from "./ExpensesChart.js";
const ExpensesS = (props) => {
  // or function Expenses(props){
  //Using use state to store the values
  const [filtertedYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (selectedyear) => {
    console.log("from expenSes");
    console.log(selectedyear);
    //After using use state
    setFilteredYear(selectedyear);
  };
  //To set data acc to year
  const filterExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filtertedYear
  })
  return (
    <div>
    <Card className="expenses">
      <div>
        <ExpenseFilter
          selected={
            /*this will set the default year value that is passes(i.e=2020 here*/ filtertedYear
          }
          onChangeFilter={filterChangeHandler}
        />
      </div>

      {/* <Expense
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></Expense>
            <Expense
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></Expense>
            <Expense
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></Expense>
             <Expense
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></Expense> */}
      
        

        {//Conditions
             }  
       {/* {filterExpenses.length===0 && <p>No Expenses Found</p>}{/*If the first condition is true then it will return the second condition*/}
       {/*filterExpenses.length>0 &&        
        filterExpenses.map((expense) => (
          <Expense
            key={expense.id} //It is used so that react get to know about individual data when there are dublicates,basically after using this it does not allow to render the dublicate elements
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></Expense> */}
          

        <ExpensesChart expenses={filterExpenses}/>
        <ExpenseList items={filterExpenses}/>
      
    </Card>
    </div>
  );
};
export default ExpensesS;
