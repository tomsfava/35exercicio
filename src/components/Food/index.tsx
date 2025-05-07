import { Card, Titulo, Descricao, Botao, Foto } from './styles'

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  nome: string
  imagem: string
  descricao: string
}

const getDescricao = (descricao: string) => {
  if (descricao.length > 170) {
    return descricao.slice(0, 168) + '...'
  }
  return descricao
}

const Food = ({ setModal, nome, imagem, descricao }: Props) => (
  <Card>
    <Foto src={imagem} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{getDescricao(descricao)}</Descricao>
    <Botao type="button" onClick={() => setModal(true)}>
      Adicionar ao carrinho
    </Botao>
  </Card>
)

export default Food
