import { useState } from "react";
import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
  // const [enteredYear, setEnteredYear] = useState("");
  const yearChangeHandler = (event) => {
    // setEnteredYear(event.target.value);
    props.onYearSelect(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year-select">Filter by year</label>
        <select value={props.selectedYear} id="year-select" onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
