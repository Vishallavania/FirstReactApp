import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function ExpenseList(props) {
    const expenseList = props.expenses;
    return (
        <div className="expenses">
            { expenseList.map((e)=> 
                (<ExpenseItem 
                    title={e.title} 
                    amount={e.amount} 
                    date={e.date}>
                </ExpenseItem>))
            }          
        </div>
    );
}

export default ExpenseList;