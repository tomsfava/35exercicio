import Food from '../Food'
import {
  List,
  ListItem,
  Modal,
  ModalContent,
  ModalText,
  ImgClose,
  ImgFood
} from './styles'
import close from '../../assets/images/close.png'
import { useState } from 'react'
import { ItemCardapio, Venue as VenueType } from '../../pages/Home'

type Props = {
  venue: VenueType
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const FoodList = ({ venue }: Props) => {
  const [modalVisivel, setModalVisivel] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<ItemCardapio | null>(
    null
  )

  return (
    <>
      <div className="container">
        <List>
          {venue.cardapio.map((prato) => (
            <ListItem key={prato.id}>
              <Food
                nome={prato.nome}
                imagem={prato.foto}
                descricao={prato.descricao}
                setModal={(visivel) => {
                  setModalVisivel(visivel)
                  setPratoSelecionado(prato)
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
      {pratoSelecionado && (
        <Modal className={modalVisivel ? 'visible' : ''}>
          <ModalContent className="container">
            <ImgClose
              src={close}
              alt=""
              onClick={() => setModalVisivel(false)}
            />
            <ImgFood src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
            <ModalText>
              <h2>{pratoSelecionado.nome}</h2>
              <p>{pratoSelecionado.descricao}</p>
              <button type="button">
                Adicionar ao carrinho {formataPreco(pratoSelecionado.preco)}
              </button>
            </ModalText>
          </ModalContent>
          <div className="overlay" onClick={() => setModalVisivel(false)}></div>
        </Modal>
      )}
    </>
  )
}

export default FoodList
