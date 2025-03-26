import { useState } from 'react'
import './Components/Navbar/Navbar'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Purple Tiger Creations</h1>
        <Navbar/>
        <Hero/>
        <div className='container'>
          <Title subTitle="What's On" title="Latest Projects"/>
          <Programs/>
          <Title subTitle="" title="About Me"/>
          <About/>
          <Title subTitle="Music" title="Latest Releases"/>
          <Campus/>
          <Title subTitle="Contact" title="Get in Touch"/>
          <Contact/>
          <Footer/>

        </div>

    </>
  )
}

export default App
 