import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ListItem = styled.li`
  width: 100%;
  height: auto;
  border: solid 1px ${colors.salmao};
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  background-color: ${colors.salmao};
  padding: 32px;
  margin-top: 30vh;
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
    color: ${colors.branco};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.branco};
    margin: 16px 0;
  }

  button {
    font-weight: 700;
    font-size: 14px;
    border: none;
    padding: 4px 7px;
    background-color: ${colors.branco};
    color: ${colors.salmao};
  }
`
