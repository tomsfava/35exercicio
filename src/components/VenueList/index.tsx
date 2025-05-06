import Venue from '../Venue'
import { List, ListItem } from './styles'
import { Venue as VenueType } from '../../Pages/Home'

type Props = {
  restaurantes: VenueType[]
}

const VenueList = ({ restaurantes }: Props) => (
  <div className="container">
    <List>
      {restaurantes.map((restaurante) => (
        <ListItem key={restaurante.id}>
          <Venue
            name={restaurante.titulo}
            rate={restaurante.avaliacao}
            image={restaurante.capa}
            description={restaurante.descricao}
            highlight={restaurante.destacado}
            type={restaurante.tipo}
            id={restaurante.id}
          />
        </ListItem>
      ))}
    </List>
  </div>
)

export default VenueList
