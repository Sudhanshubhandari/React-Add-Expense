import React ,{useState} from "react";

import "./Expense.css";
import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card"

// import ExpenseDate from "./ExpenseDate.js";
// Default
// function Expense() {
//   const expenseDate = new Date(2021, 2, 2);
//   const expenseTitle = "Car Insurance";
//   const expenseAmount = 294;
// return (
//     <div className="expense-item">
//       <div> {expenseDate.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{expenseTitle}</h2>
//         <div className="expense-item__price">{expenseAmount}</div>
//       </div>
//     </div>
//   );
// }

//Using props
function Expense(props) {
  //Without date component
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();
  
  //State are used to change the texts ,it only changes by the function

  // const [title,setTitle]=useState(props.title);//as we predifined it props.title now we can use title instead of props.title 

  // const clickHandler=()=>{
  //   setTitle('updated!')
  // };
  return (
    <Card className="expense-item">
      <div>
        {
            //Without date component
          /* <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div> */

        //With date component
          <ExpenseDate date={props.date}></ExpenseDate>  
        }
      </div>

      <div className="expense-item__description">
        
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
  );
}
export default Expense;
