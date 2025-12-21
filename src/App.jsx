import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Team from './pages/Team'
import AboutUs from './pages/AboutUs'
import Pricing from './pages/Pricing'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import ScrollToTop from './components/common/ScrollToTop'
import NoiseOverlay from './components/common/NoiseOverlay'
import { ReactLenis } from 'lenis/react'

const App = () => {
  return (
    <ReactLenis root>
      <div className='overflow-x-hidden'>
        <NoiseOverlay />
        <Navbar />
        <FullScreenNav />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agency' element={<Agence />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
      </div>
    </ReactLenis>
  )
}

export default App