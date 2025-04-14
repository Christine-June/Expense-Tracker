export default function ExpenseTable({ expenses, onDelete }) {
  return (
    <div className="expense-table-container">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses found.</p>
      ) : (
        <table className="expense-table">
          <thead>  
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>  
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.date}</td>
                <td>
                  <button 
                    onClick={() => onDelete(expense.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}