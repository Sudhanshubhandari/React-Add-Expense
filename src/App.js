// import './App.css';
import React ,{useState} from "react";
import "./index.css";
import ExpensesS from "./components/Expenses/ExpensesS";
import NewExpense from "./components/NewExpense/NewExpense";
// import Expense from "./components/Expense";
const DUMMY_EXPENSES=[

    {
      id:'e1',
      title: "Toilet paper",
      amount: "500",
      date: new Date(2022, 10, 5),
    },

    {
      id:'e2',

      title: "Insurance",
      amount: "4500",
      date: new Date(2022, 10, 5),
    },
    {
      id:'e3',

      title: "Car wash",
      amount: "2500",
      date: new Date(2022, 10, 5),
    },
    {
      id:'e4',

      title: "Car Paint",
      amount: "1400",
      date: new Date(2022, 10, 5),
    },
  ];


function App() {
  // const expense = [
  //   {
  //     title: "Toilet paper",
  //     amount: "500",
  //     date: new Date(2022, 10, 5),
  //   },

  //   {
  //     title: "Insurance",
  //     amount: "4500",
  //     date: new Date(2022, 10, 5),
  //   },
  //   {
  //     title: "Car wash",
  //     amount: "2500",
  //     date: new Date(2022, 10, 5),
  //   },
  //   {
  //     title: "Car Paint",
  //     amount: "1400",
  //     date: new Date(2022, 10, 5),
  //   },
  // ];

//USing usestate so that react can know we updatetd our form
const [expense,setExpenses]=useState(DUMMY_EXPENSES)

  //recieving this from the child i.e>from newexpense.js
  const addExpenseHandler=expense=>{
    // console.log("in APP.js")
    // console.log(expense)
    //We will get our prev data in argument by react
    setExpenses((prevExpenses)=>{
      return[expense,...prevExpenses];
    })

  }

  // JSX code

  return (
     <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
     <ExpensesS items={expense} />
     </div>
  );
  // Internally the above code is converting into this, in earlier times this was used
  // return React.createElement(
  //   'div',/*object*/{},
  //   /*content inside div */React.createElement('h2',{},"Lets get started!"),
  //   React.createElement(ExpensesS,{item: expense})

  // );
}
export default App;
