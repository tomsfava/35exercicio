import Venue from '../Venue'
import { List, ListItem } from './styles'
import hioki from '../../assets/images/hioki.png'
import dolce from '../../assets/images/dolce_vita.png'

const VenueList = () => (
  <div className="container">
    <List>
      <ListItem>
        <Venue
          name="Hioki Sushi"
          rate={4.9}
          image={hioki}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          highlight={true}
          type="Japonesa"
        />
      </ListItem>
      <ListItem>
        <Venue
          name="La Dolce Vita Trattoria"
          rate={4.6}
          image={dolce}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          highlight={false}
          type="Italiana"
        />
      </ListItem>
      <ListItem>
        <Venue
          name="La Dolce Vita Trattoria"
          rate={4.6}
          image={dolce}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          highlight={false}
          type="Italiana"
        />
      </ListItem>
      <ListItem>
        <Venue
          name="La Dolce Vita Trattoria"
          rate={4.6}
          image={dolce}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          highlight={false}
          type="Italiana"
        />
      </ListItem>
      <ListItem>
        <Venue
          name="La Dolce Vita Trattoria"
          rate={4.6}
          image={dolce}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          highlight={false}
          type="Italiana"
        />
      </ListItem>
      <ListItem>
        <Venue
          name="La Dolce Vita Trattoria"
          rate={4.6}
          image={dolce}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          highlight={false}
          type="Italiana"
        />
      </ListItem>
    </List>
  </div>
)

export default VenueList
