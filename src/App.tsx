import { Home } from "./pages"
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import './index.css'

const App = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className="App">
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App
