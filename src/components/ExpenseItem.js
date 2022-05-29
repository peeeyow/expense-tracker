import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>May 29, 2022</div>
      <div className="expense-item__description">
        <h2>Keyboard</h2>
        <div className="expense-item__price">100.00</div>
      </div>
    </div>
  );
}
