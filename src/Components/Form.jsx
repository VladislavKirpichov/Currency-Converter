import React from "react";
import { useState } from "react";

const Form = () => {
    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);

    const handleFromChange = (event) => {
        setFromAmount(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const from = 'eur';
        const to = 'usd';
        
        const updateToAmount = () => {
            fetch(
                `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`,
            )
            .then(response => response.json())
            .then(result => setToAmount(Number(result[to]) * fromAmount))
            .catch(error => console.error(error))
        }

        updateToAmount();
    }

    return (
        <>
        <form>
            {/* <div> */}
                <label>From</label>
                <input
                    type="text"
                    placeholder="100"
                    onChange={handleFromChange}
                />
            <label>To</label>
            <input placeholder="100"></input>
            <button onClick={handleSubmit} type='submit'>Submit</button>
            <h3>{toAmount}</h3>
        </form>
        </>
    )
}

export default Form;