import React, { useState } from "react";
import Amount from "./Components/Amount";
import ConvertSelect from "./Components/ConvertSelect";
import Button from "./Components/Button";
import Result from "./Components/Result";
import Loader from "./Components/Loader";

export default function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CAD");

  const handleConvert = async function convert() {
    if (amount <= 0) {
      alert("Amount must be greater than zero");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setCurrency(Number(data.rates[toCurrency]).toFixed(2));
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="header">💰 Currency Converter</h1>

        <Amount amount={amount} setAmount={setAmount} />

        <ConvertSelect
          currency={currency}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          onChangeFromCurrency={setFromCurrency}
          onChangeToCurrency={setToCurrency}
        />

        {isLoading && <Loader />}
        {!isLoading && <Button handleConvert={handleConvert} />}

        {currency && <Result currency={currency} />}
      </div>
    </div>
  );
}
