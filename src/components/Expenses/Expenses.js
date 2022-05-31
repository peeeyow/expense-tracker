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
        <ExpenseItem
          title={props.items[0].title}
          price={props.items[0].price}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          price={props.items[1].price}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          price={props.items[2].price}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          price={props.items[3].price}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}
