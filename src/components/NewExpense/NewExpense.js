import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [isOpen, setIsOpen] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    expenseData = {
      ...expenseData,
      id: Math.floor(Math.random() * 1_000_000).toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpen(false);
  };
  const onCancelHandler = () => {
    setIsOpen(false);
  };
  const onAddNewExpenseHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className="new-expense">
      {isOpen ? (
        <ExpenseForm onCancel={onCancelHandler} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={onAddNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
}
