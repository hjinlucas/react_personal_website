import React from 'react'
import { About, Contact, Experience, Footer, Header, Nav } from './components'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
