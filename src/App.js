import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 95,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 800, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 250,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,setExpenses] = useState(dummy_expenses);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;