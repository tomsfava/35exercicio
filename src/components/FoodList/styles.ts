import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 80px;
`

export const ListItem = styled.li`
  height: 340px;
  border: solid 1px ${cores.salmao};
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  background-color: ${cores.salmao};
  padding: 32px;
  margin-top: 40vh;
`

export const ImgFood = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
  margin-right: 24px;
`

export const ImgClose = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const ModalText = styled.div`
  h2 {
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    color: ${cores.branco};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branco};
    margin: 16px 0;
  }

  button {
    font-weight: 700;
    font-size: 14px;
    border: none;
    padding: 4px 7px;
  }
`
