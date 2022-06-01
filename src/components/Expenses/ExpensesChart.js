import Chart from "../Chart/Chart.js";

export default function ExpensesChart(props) {
  const expensesPerMonth = [
    { month_name: "Jan", amount: 0 },
    { month_name: "Feb", amount: 0 },
    { month_name: "Mar", amount: 0 },
    { month_name: "Apil", amount: 0 },
    { month_name: "May", amount: 0 },
    { month_name: "Jun", amount: 0 },
    { month_name: "Jul", amount: 0 },
    { month_name: "Aug", amount: 0 },
    { month_name: "Sept", amount: 0 },
    { month_name: "Oct", amount: 0 },
    { month_name: "Nov", amount: 0 },
    { month_name: "Dec", amount: 0 },
  ];
  for (const expense of props.filteredExpenses) {
    const month = expense.date.getMonth();
    expensesPerMonth[month].amount += expense.price;
  }
  console.log(expensesPerMonth);

  return <Chart items={expensesPerMonth} />;
}
