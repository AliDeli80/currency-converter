import React, { useEffect, useRef } from "react";

export default function Amount({ amount, setAmount }) {
  const inputElement = useRef(null);

  useEffect(function () {
    inputElement.current.focus();
  }, []);

  return (
    <div className="amount">
      <label className="amount-label" htmlFor="amount">
        Amount
      </label>
      <input
        type="number"
        placeholder="Enter amount"
        name="amount"
        id="amount"
        value={amount}
        min={0}
        onChange={(e) => setAmount(e.target.value)}
        ref={inputElement}
      />
    </div>
  );
}
