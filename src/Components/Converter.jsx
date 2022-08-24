import React from 'react';
import { useState } from 'react';
import InputAmount from './InputAmount';

const Converter = ({from, to}) => {
    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);
    const [lastUpdated, setLastUpdated] = useState('from')

    const handleFromChange = (event) => {
        setLastUpdated('from');
        setFromAmount(event.target.value);
    };

    const handleToAmount = (event) => {
        setLastUpdated('right');
        setToAmount(event.target.value);
    }

    const updateAmount = (from, to, amount, setFunction) => {
        fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`
        )   
            .then((response) => response.json())
            .then((result) => setFunction((Number(result[to]) * amount).toFixed(2)))
            .catch((error) => console.error(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (lastUpdated === 'from') {
            updateAmount(from, to, fromAmount, setToAmount);
        } else {
            updateAmount(to, from, toAmount, setFromAmount);
        }
    };

    return (
        <>
            <form>
                <div className='grid gap-4 grid-cols-2'>
                    <div>
                        <InputAmount placeholder={fromAmount} onChangeFunction={(e) => handleFromChange(e)}></InputAmount>
                    </div>
                    <div>
                        <InputAmount placeholder={toAmount} onChangeFunction={(e) => handleToAmount(e)}></InputAmount>
                    </div>
                </div>
                <button
                    className="mt-4 border-solid border-2 border-indigo-600 px-4 py-2 rounded-lg shadow-sm bg-white font-medium"
                    onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Converter;
