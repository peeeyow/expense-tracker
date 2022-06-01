import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const totalAmount = props.items
    .map((expense) => expense.amount)
    .reduce((previous, current) => previous + current, 0);
  console.log(totalAmount);
  return (
    <div className="chart">
      {props.items.map((expense) => (
        <ChartBar
          key={expense.month_name}
          name={expense.month_name}
          value={expense.amount}
          totalValue={totalAmount}
        />
      ))}
    </div>
  );
}
