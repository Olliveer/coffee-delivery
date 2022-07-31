import { ShoppingCart } from 'phosphor-react';
import {
  HomeContainer,
  IntroContainer,
  Item,
  ItemsIntro,
  SubTitle,
  TextSection,
  Title,
} from './styles';

import CoffeeIntro from '../../assets/coffee-intro.svg';

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
              Compra simples e segura
            </div>
            <div>
              <Item itemColor="yellow">
                <ShoppingCart size={32} weight="fill" />
              </Item>
              Compra simples e segura
            </div>
            <div>
              <Item itemColor="purple">
                <ShoppingCart size={32} weight="fill" />
              </Item>
              Compra simples e segura
            </div>
          </ItemsIntro>
        </TextSection>

        <img src={CoffeeIntro} alt="" />
      </IntroContainer>
    </HomeContainer>
  );
}
