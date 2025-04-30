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
  id: number
}

const capitalizeB = (str: string) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const getDescricaoB = (descricao: string) => {
  if (descricao.length > 240) {
    return descricao.slice(0, 238) + '...'
  }
  return descricao
}

const Venue = ({
  name,
  rate,
  description,
  image,
  highlight,
  type,
  id
}: Props) => {
  return (
    <Card>
      <Foto src={image} alt={name} />
      <Infos>
        {highlight && <Tag>Destaque da semana</Tag>}
        <Tag>{capitalizeB(type)}</Tag>
      </Infos>
      <TituloENota>
        <Titulo>{name}</Titulo>
        <Nota>
          {rate} <img src={estrela} alt="Estrela" />
        </Nota>
      </TituloENota>
      <Descricao>{getDescricaoB(description)}</Descricao>
      <Botao to={`/venue/${id}`}>Saiba mais</Botao>
    </Card>
  )
}

export default Venue
