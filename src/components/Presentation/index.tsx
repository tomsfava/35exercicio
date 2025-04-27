import tratoriaFundo from '../../assets/images/tratoria_fundo.png'
import { Imagem, Title, Type } from './styles'

const Presentation = () => (
  <Imagem style={{ backgroundImage: `url(${tratoriaFundo})` }}>
    <div className="container">
      <Type>Italiana</Type>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Imagem>
)

export default Presentation
