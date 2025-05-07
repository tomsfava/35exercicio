import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FoodList from '../../components/FoodList'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import { useGetVenueQuery } from '../../services/api'

const Venue = () => {
  const { id } = useParams()
  const { data: venue } = useGetVenueQuery(id)

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
