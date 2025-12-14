import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageWrapper from './components/common/PageWrapper'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import NoiseOverlay from './components/common/NoiseOverlay'
import { ReactLenis } from 'lenis/react'

const App = () => {
  const location = useLocation()
  return (
    <ReactLenis root>
      <div className='overflow-x-hidden'>
        <NoiseOverlay />
        <Navbar />
        <FullScreenNav />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<PageWrapper><Home /></PageWrapper>} />
            <Route path='/agency' element={<PageWrapper><Agence /></PageWrapper>} />
            <Route path='/projects' element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path='/contact' element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path='/team' element={<PageWrapper><Team /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </ReactLenis>
  )
}

export default App