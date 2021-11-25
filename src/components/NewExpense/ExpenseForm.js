import './ExpenseForm.css';
import {useState} from 'react';

function ExpenseForm(props) {   
    const [userInput,setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });
    const titleChangeHandle = (event) => {
        setUserInput((prevState)=>{
            return {...prevState,enteredTitle: event.target.value};
        });
    };
    const amountChangeHandle = (event) => {
        setUserInput((prevState)=>{
            return {...prevState,enteredAmount: event.target.value};
        });
    };
    const dateChangeHandle = (event) => {
        setUserInput((prevState)=>{
            return {...prevState,enteredDate: event.target.value};
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput);
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        });
    };

    const closeExpenseFormHandler = () => {
        props.onCancelClick(false);
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2021-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandle}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={closeExpenseFormHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    ); 
}

export default ExpenseForm;