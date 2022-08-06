import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import expressoImg from '../../../assets/coffes/expresso.svg';
import {
  Badge,
  ButtonCart,
  ButtonsAddContainer,
  ButtonsContainer,
  CardContainer,
} from './styles';

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={expressoImg} alt="" />

      <Badge>tradicional</Badge>
      <strong>Expresso tradicional</strong>
      <span>O tradicional café feito com água quente e grãos moídos</span>

      <ButtonsContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <ButtonsAddContainer>
          <button type="button">
            <Plus size={14} weight="bold" />
          </button>
          <span>1</span>
          <button type="button">
            <Minus size={14} weight="bold" />
          </button>
        </ButtonsAddContainer>
        <ButtonCart type="button">
          <ShoppingCart size={22} weight="fill" />
        </ButtonCart>
      </ButtonsContainer>
    </CardContainer>
  );
}
