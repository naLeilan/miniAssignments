// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = Math.round(
    (bill * (Number(percentage1) + Number(percentage2))) / 200
  );

  function handleReset() {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={Number(percentage1)}
        onSelect={setPercentage1}
      >
        How did you like the Service?
      </SelectPercentage>
      <SelectPercentage
        percentage={Number(percentage2)}
        onSelect={setPercentage2}
      >
        How did your friend like the Service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={e => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={e => onSelect(e.target.value)}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was ok(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">It was great(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  const total = bill + tip;

  return (
    <h3>
      You pay ${total}(${bill} + ${tip})
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
