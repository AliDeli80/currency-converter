import React from "react";

export default function ConvertSelect({
  onChangeFromCurrency,
  fromCurrency,
  onChangeToCurrency,
  toCurrency,
}) {
  return (
    <div className="convert-select">
      <div className="from-To-select">
        <label htmlFor="from">from</label>
        <select
          name="from"
          id="from"
          value={fromCurrency}
          onChange={(e) => onChangeFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div className="from-To-select">
        <label htmlFor="to">to</label>
        <select
          name="to"
          id="to"
          value={toCurrency}
          onChange={(e) => onChangeToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
    </div>
  );
}
