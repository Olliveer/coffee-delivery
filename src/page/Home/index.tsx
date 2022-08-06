import { ShoppingCart } from 'phosphor-react';
import {
  CoffeList,
  CoffeListContainer,
  HomeContainer,
  IntroContainer,
  Item,
  ItemsIntro,
  SubTitle,
  TextSection,
  Title,
} from './styles';

import CoffeeIntro from '../../assets/coffee-intro.svg';
import { CoffeeCard } from './components/CoffeeCard';

const Coffees = [
  {
    id: 1,
    img: {
      url: '',
      title: '',
    },
    type: 'tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: 2,
    img: {
      url: '',
      title: '',
    },
    type: 'tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
];

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <TextSection>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <ItemsIntro>
            <div>
              <Item itemColor="yellowDark">
                <ShoppingCart size={32} weight="fill" />
              </Item>
              Compra simples e segura
            </div>
            <div>
              <Item itemColor="baseText">
                <ShoppingCart size={32} weight="fill" />
              </Item>
              Embalagem mantém o café intacto
            </div>
            <div>
              <Item itemColor="yellow">
                <ShoppingCart size={32} weight="fill" />
              </Item>
              Entrega rápida e rastreada
            </div>
            <div>
              <Item itemColor="purple">
                <ShoppingCart size={32} weight="fill" />
              </Item>
              O café chega fresquinho até você
            </div>
          </ItemsIntro>
        </TextSection>

        <img src={CoffeeIntro} alt="" />
      </IntroContainer>

      <CoffeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeList>
          <CoffeeCard />
        </CoffeList>
      </CoffeListContainer>
    </HomeContainer>
  );
}
