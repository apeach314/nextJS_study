import { Counter } from "../components/Count";
import { useState } from "react";
function CounterDummy({ value, onChangeValue }) {
  return (
    <>
      {value}{" "}
      <input type="button" value="+" onClick={() => onChangeValue(value + 1)} />
    </>
  );
}

export default function Home() {
  const [cnt, setCnt] = useState(10);
  return (
    <>
      <h1>COUNTER</h1>
      <Counter down={true}></Counter> <br />
      <CounterDummy
        value={cnt}
        onChangeValue={(oldValue) => {
          setCnt(oldValue);
        }}
      ></CounterDummy>
    </>
  );
}
