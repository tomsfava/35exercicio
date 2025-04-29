import Food from '../Food'
import {
  List,
  ListItem,
  Modal,
  ModalContent,
  ModalText,
  ImgClose,
  ImgFood
} from './styles'
import marguerita from '../../assets/images/marguerita.png'
import close from '../../assets/images/close.png'

const FoodList = () => (
  <>
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
    <Modal>
      <ModalContent className="container">
        <ImgClose src={close} alt="" />
        <ImgFood src={marguerita} alt="" />
        <ModalText>
          <h2>Pizza Marguerita</h2>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. Serve: de 2 a 3 pessoas
          </p>
          <button type="button">Adicionar ao carrinho - R$ 60,90</button>
        </ModalText>
      </ModalContent>
    </Modal>
  </>
)

export default FoodList
