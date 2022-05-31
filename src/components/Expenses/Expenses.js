import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
