import React from 'react'
import { About, Contact, Experience, Footer, Header, Nav, Portfolio } from './components'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
