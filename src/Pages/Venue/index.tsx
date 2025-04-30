import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FoodList from '../../components/FoodList'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import { Venue as VenueType } from '../Home'

const Venue = () => {
  const { id } = useParams()
  const [venue, setVenue] = useState<VenueType | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setVenue(res))
  }, [id])

  if (!venue) {
    return <h4>Carregando Restaurante...</h4>
  }
  return (
    <>
      <Header />
      <Presentation venue={venue} />
      <FoodList venue={venue} />
    </>
  )
}

export default Venue
