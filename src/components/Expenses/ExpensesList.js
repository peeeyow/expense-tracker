import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item) => (
        <ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date} />
      ))}
    </ul>
  );
}
