import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id:Math.random().toString(),
            title:enteredExpenseData.enteredTitle,
            amount:enteredExpenseData.enteredAmount,
            date:new Date(enteredExpenseData.enteredDate)         
        }
        props.onAddExpense(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    ); 
}

export default NewExpense;