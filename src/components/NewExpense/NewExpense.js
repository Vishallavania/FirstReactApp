import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
    const [showExpenseForm,setShowExpenseForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id:Math.random().toString(),
            title:enteredExpenseData.enteredTitle,
            amount:enteredExpenseData.enteredAmount,
            date:new Date(enteredExpenseData.enteredDate)         
        }
        props.onAddExpense(expenseData);
    }

    const addNewExpenseHandler = () => {
        setShowExpenseForm(true);
    }

    const cancelClickHandler = (prevState) => {
        setShowExpenseForm(prevState);
    }

    let expenseFormContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={cancelClickHandler}/>;
    if(!showExpenseForm)
    {
        expenseFormContent = <button onClick={addNewExpenseHandler}>Add New Expense</button>
    }
    return(
        <div className="new-expense">
            {expenseFormContent}
        </div>
    ); 
}

export default NewExpense;