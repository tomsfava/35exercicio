import { Card, Titulo, Descricao, Botao } from './styles'
import marguerita from '../../assets/images/marguerita.png'
import React from 'react'

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Food = ({ setModal }: Props) => (
  <Card>
    <img src={marguerita} alt="Pizza Marguerita" />
    <Titulo>Pizza Marguerita</Titulo>
    <Descricao>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Descricao>
    <Botao type="button" onClick={() => setModal(true)}>
      Adicionar ao carrinho
    </Botao>
  </Card>
)

export default Food
