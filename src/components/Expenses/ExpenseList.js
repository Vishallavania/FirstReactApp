import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

function ExpenseList(props) {
    const expenseList = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2020');

    const expenseFilterChangesHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onExpenseFilterChanges={expenseFilterChangesHandler}/>
                { expenseList.map((e)=> 
                    (<ExpenseItem 
                        title={e.title} 
                        amount={e.amount} 
                        date={e.date}>
                    </ExpenseItem>))
                }          
            </Card>
        </div>
    );
}

export default ExpenseList;