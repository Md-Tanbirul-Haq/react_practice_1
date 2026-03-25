
import Calculator from "./calculator_"
import Cricket_runs from "./cricket"
import User from "./user"
import { use, Suspense } from "react";


const user_fetch = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
function App() {


  return (
    <>

      {/* <Calculator></Calculator> */}
      {/* <Cricket_runs></Cricket_runs> */}



      <Suspense fallback={<p>Loading...</p>}>


        <User user_fetch={user_fetch}></User>

      </Suspense>


    </>
  )
}

export default App
