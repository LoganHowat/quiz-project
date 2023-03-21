import { Home } from "./pages"
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import SquaresBG from "react-animated-squares"
import "./App.css"

const App = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className="App">
      <SquaresBG count={40} speed={0.7} backgroundColor={"linear-gradient(-45deg, #ee7752, #e73c7e)"}/>
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App
