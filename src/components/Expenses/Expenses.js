import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const [year, setYear] = useState("2020");
  const yearSelectHandler = (year) => {
    setYear(year);
    console.log(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearSelect={yearSelectHandler} />
        {props.items.map((item) => (
          <ExpenseItem title={item.title} price={item.price} date={item.date} />
        ))}
      </Card>
    </div>
  );
}
