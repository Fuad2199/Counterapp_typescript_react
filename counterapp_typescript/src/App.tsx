import { useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <div className="app-counter">
        <h1>Counter App</h1>
        <div className="counter-display">
          <p>Current Count: {count}</p>
        </div>
        <div className="button-group">
          <button className='btn increment' onClick={increment}>Increment</button>
          <button className='btn decrement' onClick={decrement}>Decrement</button>
          <button className='btn reset' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
