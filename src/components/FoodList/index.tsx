import Food from '../Food'
import { List, ListItem } from './styles'

const FoodList = () => (
  <div className="container">
    <List>
      <ListItem>
        <Food />
      </ListItem>
      <ListItem>
        <Food />
      </ListItem>
      <ListItem>
        <Food />
      </ListItem>
      <ListItem>
        <Food />
      </ListItem>
      <ListItem>
        <Food />
      </ListItem>
      <ListItem>
        <Food />
      </ListItem>
    </List>
  </div>
)

export default FoodList
