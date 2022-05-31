import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const [year, setYear] = useState("2020");
  const yearSelectHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearSelect={yearSelectHandler} />
        {filteredExpenses.map((item) => (
          <ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date} />
        ))}
      </Card>
    </div>
  );
}
