import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

function ExpenseList(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const expenseFilterChangesHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };
    const expenseList = props.expenses.filter(ex => {
        return ex.date.getFullYear().toString() === filteredYear
    });

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onExpenseFilterChanges={expenseFilterChangesHandler}/>
                { expenseList.map((e)=> 
                    (<ExpenseItem 
                        key={e.id}
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