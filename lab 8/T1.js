import React, { useState } from 'react';

const CurrencyConverter = () => {
  // Define state variables
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Hard-coded exchange rates
  const exchangeRates = {
    USD: {
      EUR: 0.82,
      GBP: 0.73,
      JPY: 109.72,
    },
    EUR: {
      USD: 1.22,
      GBP: 0.89,
      JPY: 129.91,
    },
    GBP: {
      USD: 1.37,
      EUR: 1.12,
      JPY: 146.88,
    },
    JPY: {
      USD: 0.0091,
      EUR: 0.0077,
      GBP: 0.0068,
    },
  };

  // Handle amount change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Handle currency change
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  // Handle conversion
  const handleConvert = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = parseFloat(amount) * rate;
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
      </div>
      <div>
        <label>
          From:
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          To:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
      </div>
      <button onClick={handleConvert}>Convert</button>
      {convertedAmount && (
        <p>
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
