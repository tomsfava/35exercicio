import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import VenueList from '../../components/VenueList'

export type ItemCardapio = {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

export type Venue = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Venue[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <VenueList restaurantes={restaurantes} />
    </>
  )
}

export default Home
