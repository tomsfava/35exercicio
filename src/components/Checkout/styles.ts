import styled from 'styled-components'
import { colors } from '../../styles'
import { Field } from 'formik'

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
  margin-bottom: 8px;
`

export const BotaoGroup = styled.div`
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
`

export const StyledInput = styled(Field)`
  border: none;
  outline: none;
  background-color: ${colors.rosaClaro};
  padding: 8px;
  font-size: 14px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`

export const DInputGroup = styled.div`
  display: flex;
  margin-left: 8px;
  margin-right: 8px;
  gap: 32px;

  ${InputGroup} {
    width: 148px;
    margin-left: 0;
    margin-right: 0;
  }

  &.c6625 {
    ${InputGroup}:nth-of-type(1) {
      width: 228px;
    }

    ${InputGroup}:nth-of-type(2) {
      max-width: 82px;
    }
  }
`
