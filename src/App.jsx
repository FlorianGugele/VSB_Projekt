import './App.css'
import { useState } from 'react'
import Body from './components/body'
import Header from './components/header'
import Angemeldet from './components/angemeldet'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <Header />
      {loggedIn ? (
        <Angemeldet onLogout={() => setLoggedIn(false)} />
      ) : (
        <Body onAnmelden={() => setLoggedIn(true)} />
      )}
    </>
  )
}

export default App
