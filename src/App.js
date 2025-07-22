import React, { useState } from "react";
import Amount from "./Components/Amount";
import ConvertSelect from "./Components/ConvertSelect";
import Button from "./Components/Button";
import Result from "./Components/Result";
import Loader from "./Components/Loader";

export default function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("result");
  const [isLoading, setIsLoading] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CAD");

  const handleConvert = async function convert() {
    const controller = new AbortController();

    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
        { signal: controller.signal }
      );
      const data = await res.json();
      setCurrency(data.rates[toCurrency]);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Fetch error:", error);
      }
    } finally {
      setIsLoading(false);
    }

    if (fromCurrency === toCurrency) return setCurrency(amount);

    setIsLoading(false);
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

        <Result currency={currency} />
      </div>
    </div>
  );
}
