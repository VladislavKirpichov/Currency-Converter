import React from "react";

const currencies = [
    {
      id: 1,
      name: 'usd'
    },
    {
      id: 2,
      name: 'eur'
    },
    {
      id: 3,
      name: 'gbp'
    },
    {
      id: 4,
      name: 'rub'
    }
  ]

const CurrencySelectionForm = ({header, setCurrency}) => {
    return (
        <form className='flex flex-col align-middle justify-center p-3 bg-slate-50 rounded-lg'>
            <label className='text-lg font-medium upper mb-4'>{header}</label>
                <div className='grid gap-4 grid-cols-4'>
                    {currencies.slice(0, 3).map((currency) => (
                    <button key={currency.id} onClick={(e) => {
                            e.preventDefault();
                            setCurrency(e.target.value)}}
                        className="rounded-md shadow-sm pb-2 pt-2 bg-white border-2 border-white
                                   hover:border-solid hover:border-indigo-600
                                   focus:border-solid focus:border-indigo-700"
                        value={currency.name}>{currency.name.toUpperCase()}</button>
                    ))}
                    <select onChange={(e) => {
                        e.preventDefault();
                        setCurrency(e.target.value);
                    }}>
                        {currencies.map((currency) => (
                        <option key={currency.id} value={currency.name}>{currency.name.toUpperCase()}</option>
                        ))}
                    </select>
                </div>
        </form>
    )
}

export default CurrencySelectionForm;