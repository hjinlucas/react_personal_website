import React from 'react'
import { About, Experience, Footer, Header, Nav, Proj } from './components'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <About />
        <Experience />
        <Proj />
      </main>
      <Footer />
    </>
  )
}

export default App
