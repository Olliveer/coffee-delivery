import { MapPin, ShoppingCart } from 'phosphor-react';
import { ButtonsContainer, Cart, HeaderContainer } from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <ButtonsContainer>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Curitiba, PR</span>
        </div>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
