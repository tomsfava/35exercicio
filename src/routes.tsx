import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Venue from './Pages/Venue'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/venue/:id" element={<Venue />} />
  </Routes>
)

export default Rotas
