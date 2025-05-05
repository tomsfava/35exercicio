import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Venue from './pages/Venue'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/venue/:id" element={<Venue />} />
  </Routes>
)

export default Rotas
