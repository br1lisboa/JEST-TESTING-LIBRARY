import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CounterApp({ value }) {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        //setCounter(counter + 1)
        setCounter((c) => c + 1)
    }
    const handleRest = () => {
        setCounter(value)
        //setCounter((c) => c = 0)
    }
    const handleSub = () => {
        //setCounter(counter + 1)
        setCounter((c) => c - 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <div className='btn-container'>
                <button onClick={handleAdd}>+1</button>
                <button aria-label='btn-reset' onClick={handleRest}>Reset</button>
                <button onClick={handleSub}>-1</button>
            </div>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}