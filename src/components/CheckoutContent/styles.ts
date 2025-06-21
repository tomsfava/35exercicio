import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  color: ${colors.rosaClaro};

  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 100%;
    margin-left: 8px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 22px;
  }

  label {
    font-size: 14px;
    line-height: 100%;
    font-weight: 700;
    margin-bottom: 8px;
  }
`
