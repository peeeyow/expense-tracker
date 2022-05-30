import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input type="number" min="0.0" name="amount" id="amount" />
        </div>
        <div className="new-expense__control">
          <label for="date">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" name="date" id="date" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
