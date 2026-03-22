import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0)

  return (
    <>

      <div className='add_'>
        <h1>{number}</h1>
        <div className='add_button'>
          <button onClick={() => setNumber(number + 1)} >Add 1</button>
          <button onClick={() => setNumber(number + 2)} >Add 2</button>
          <button onClick={() => setNumber(number + 3)} >Add 3</button>
          <button onClick={() => setNumber(number + 4)} >Add 4</button>
          <button onClick={() => setNumber(number + 5)} >Add 5</button>
          <button onClick={() => setNumber(number + 6)} >Add 6</button>
          <button onClick={() => setNumber(number + 7)} >Add 7</button>
          <button onClick={() => setNumber(number + 8)} >Add 8</button>
          <button onClick={() => setNumber(number + 9)} >Add 9</button>
        </div>
      </div>

    </>
  )
}

export default App
