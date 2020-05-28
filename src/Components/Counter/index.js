import * as React from 'react';
import { useState } from 'react';
import './styles.scss'

const Counter = () => {
    const [count, setCount] = useState(0);

    return <div className="counter">
        <div className="counter-container">
            <p className={count % 2 === 0 ? 'black' : 'gray'}>{count}</p>
            <button onClick={() => setCount(count + 1)}>Up</button>
        </div>
    </div>
}

export default Counter;