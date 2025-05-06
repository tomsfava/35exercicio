import { Venue as VenueType } from '../../pages/Home'
import { Imagem, Title, Type } from './styles'

type Props = {
  venue: VenueType
}

const capitalize = (str: string) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const Presentation = ({ venue }: Props) => (
  <Imagem style={{ backgroundImage: `url(${venue.capa})` }}>
    <div className="container">
      <Type>{capitalize(venue.tipo)}</Type>
      <Title>{venue.titulo}</Title>
    </div>
  </Imagem>
)

export default Presentation
