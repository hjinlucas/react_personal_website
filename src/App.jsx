import React from 'react'
import { About, Contact, Experience, Footer, Header, Nav, Proj } from './components'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <About />
        <Experience />
        <Proj />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
