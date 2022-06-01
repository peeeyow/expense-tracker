import { computeHeadingLevel } from "@testing-library/react";
import "./ChartBar.css";

export default function ChartBar(props) {
  const computedHeight = Math.floor((props.value / props.totalValue) * 100);
  const height = `${isNaN(computedHeight) ? 0 : computedHeight}%`;
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height }}></div>
      </div>
      <div className="chart-bar__label">{props.name}</div>
    </div>
  );
}
