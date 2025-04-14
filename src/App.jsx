import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={expenses} />
    </div>
  );
}

export default App;