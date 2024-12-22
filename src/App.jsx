import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<img src={viteLogo} className="logo" alt="Vite logo" />*/}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/my-feed">My Feed</NavLink>
      <NavLink to="/preferences">Preferences</NavLink>
    </>
  )
}

export default App
