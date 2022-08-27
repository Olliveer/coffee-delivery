import {
  ButtonsAddContainer,
  ButtonsContainer,
  CoffeeCheckout,
  CoffeeContainer,
  Divider,
} from './styles';

import imgTemp from '../../../assets/coffes/expresso.svg';
import { Minus, Plus, Trash } from 'phosphor-react';

export function CoffeeCard() {
  return (
    <>
      <CoffeeContainer>
        <img src={imgTemp} alt="" />
        <CoffeeCheckout>
          <header>
            <span>Expresso tradicional</span>
            <strong>R$ 9,90</strong>
          </header>
          <ButtonsContainer>
            <ButtonsAddContainer>
              <button type="button">
                <Plus size={14} weight="bold" />
              </button>
              <span>1</span>
              <button type="button">
                <Minus size={14} weight="bold" />
              </button>
            </ButtonsAddContainer>
            <button type="button">
              <Trash size={16} weight="bold" />
              Remover
            </button>
          </ButtonsContainer>
        </CoffeeCheckout>
      </CoffeeContainer>
      <Divider />
    </>
  );
}
