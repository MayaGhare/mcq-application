import { useState } from 'react'
import Login from './Login'
import About from './About'



import Home from './Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Home/>
    <About/>
     
    </>
  )
}

export default App
