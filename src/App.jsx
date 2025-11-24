import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Subscription from './Components/Subscription/Subscription.jsx'
import Footer from './Components/Footer/Footer.jsx'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Subscription />
      <Footer />

     
    </div>

  )
}

export default App
