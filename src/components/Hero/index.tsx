import { Link } from 'react-router-dom'

import { HeroBar, HeroText } from './styles'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroBar>
    <a>
      <img src={logo} alt="EFOOD" />
    </a>
    <HeroText>Viva experiências gastronômicas no conforto da sua casa</HeroText>
  </HeroBar>
)

export default Hero
