import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      {/* Simple navigation */}
      <nav className='bg-blue-200'>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
      </nav>

      <hr />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App