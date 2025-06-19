import styled from 'styled-components'
import { colors } from '../../styles'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.div`
  background-color: ${colors.salmao};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const Botao = styled.button`
  display: block;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  background-color: ${colors.rosaClaro};
  color: ${colors.salmao};
  border: none;
  padding: 4px 0;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.rosaClaro};
  margin-bottom: 16px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.rosaClaro};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    color: ${colors.salmao};
  }

  span {
    display: block;
    font-size: 14px;
    color: ${colors.salmao};
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
