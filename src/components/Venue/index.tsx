import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'
import {
  Botao,
  Card,
  Descricao,
  Foto,
  Infos,
  Nota,
  Titulo,
  TituloENota
} from './styles'

type Props = {
  name: string
  rate: number
  description: string
  image: string
  highlight: boolean
  type: string
}

const Venue = ({ name, rate, description, image, highlight, type }: Props) => (
  <Card>
    <Foto src={image} alt={name} />
    <Infos>
      {highlight && <Tag>Destaque da semana</Tag>}
      <Tag>{type}</Tag>
    </Infos>
    <TituloENota>
      <Titulo>{name}</Titulo>
      <Nota>
        {rate} <img src={estrela} alt="Estrela" />
      </Nota>
    </TituloENota>
    <Descricao>{description}</Descricao>
    <Botao to="/venue/1">Saiba mais</Botao>
  </Card>
)

export default Venue
