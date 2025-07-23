import React from "react";

export default function ConvertSelect({
  onChangeFromCurrency,
  fromCurrency,
  onChangeToCurrency,
  toCurrency,
}) {
  const currencies = ["USD", "EUR", "CAD", "INR"];

  return (
    <div className="convert-select">
      <div className="from-To-select">
        <label htmlFor="from">From</label>
        <select
          name="from"
          id="from"
          value={fromCurrency}
          onChange={(e) => onChangeFromCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur} disabled={cur === toCurrency}>
              {cur}
            </option>
          ))}
        </select>
      </div>
      <div className="from-To-select">
        <label htmlFor="to">To</label>
        <select
          name="to"
          id="to"
          value={toCurrency}
          onChange={(e) => onChangeToCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur} disabled={cur === fromCurrency}>
              {cur}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
