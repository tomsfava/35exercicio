import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoints, cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 400px;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Foto = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const TituloENota = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${cores.salmao};
`

export const Titulo = styled.h3`
  padding-left: 8px;
`

export const Nota = styled.span`
  display: flex;
  align-items: center;
  padding-right: 8px;

  img {
    padding-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 0 8px;
  width: 100%;
  color: ${cores.salmao};

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0 4px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Botao = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 100%;
  color: ${cores.rosaClaro};
  background-color: ${cores.salmao};
  padding: 4px 6px;
  margin-left: 8px;
  margin-top: 16px;
  display: inline-block;
`
