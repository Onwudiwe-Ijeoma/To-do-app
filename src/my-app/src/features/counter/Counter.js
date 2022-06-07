import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log('count', count);

  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const [compState, setcompState] = useState(0);

  const incrementValue = Number(incrementAmount) || 0;

  const compIncrement = () => {
    setcompState(compState + 1);
  };

  const compDecrement = () => {
    setcompState(compState - 1);
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
          // onClick={compDecrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
          // onClick={compIncrement}
        >
          +
        </button>
      </div>
      <input
        className={styles.textbox}
        aria-label='Set increment amount'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(incrementValue))}
      >
        Add Amount
      </button>
      {/* <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
    </div>
  );
}
