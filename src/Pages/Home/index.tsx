import Hero from '../../components/Hero'
import VenueList from '../../components/VenueList'
import { useGetVenuesQuery } from '../../services/api'

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
  const { data: restaurantes } = useGetVenuesQuery()

  if (restaurantes) {
    return (
      <>
        <Hero />
        <VenueList restaurantes={restaurantes} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
