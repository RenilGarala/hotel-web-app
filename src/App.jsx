import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Roomselection from './components/search/Roomselection'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='project'>
        <div className='nav'>
          <Navbar/>
        </div>
        <div className='bodypart'>
          <Roomselection/>
        </div>
        <div className='page-footer'>
          <Footer/>
        </div>
      </div>
    </>
  )
}
export default App