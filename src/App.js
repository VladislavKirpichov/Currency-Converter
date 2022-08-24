import React, { useState } from 'react';
import CurrencySelectionForm from './Components/CurrencySelectionForm.jsx';
import './App.css';
import Converter from './Components/Converter';

function App() {
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('eur');

  return (
    <div className="App h-[100vh] bg-slate-100 pl-40 pr-40 pt-8">
      <h5 className='text-sm uppercase from-neutral-900 font-semibold text-center mb-8'>Exchange</h5>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4'>
        <CurrencySelectionForm header={'From'} setCurrency={setFromCurrency}></CurrencySelectionForm>
        <CurrencySelectionForm header={'To'} setCurrency={setToCurrency}></CurrencySelectionForm>
      </div>
      <Converter from={fromCurrency} to={toCurrency}></Converter>
    </div>
  );
}

export default App;
