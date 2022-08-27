import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { CoffeeCard } from './components/CoffeeCard';
import {
  Address,
  AddressContainer,
  AddressInput,
  CartCheckout,
  CartContainer,
  CheckoutContainer,
  CityUfContainer,
  NumberComplementContainer,
  PaymentContainer,
  Payments,
  PostalCode,
  PriceContainer,
} from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressContainer>
        <h1>Complete seu pedido</h1>

        <Address>
          <header>
            <MapPinLine size={22} />
            <div>
              <h1>Endereço de Entrega</h1>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </header>

          <form>
            <PostalCode>
              <AddressInput type="text" placeholder="CEP" />
            </PostalCode>

            <AddressInput type="text" placeholder="Rua" />

            <NumberComplementContainer>
              <AddressInput type="text" placeholder="Número" />
              <AddressInput type="text" placeholder="Complemento" />
            </NumberComplementContainer>
            <CityUfContainer>
              <AddressInput type="text" placeholder="Bairro" />
              <AddressInput type="text" placeholder="Cidade" />
              <AddressInput type="text" placeholder="UF" />
            </CityUfContainer>
          </form>
        </Address>

        <PaymentContainer>
          <header>
            <CurrencyDollarSimple size={22} />
            <div>
              <h1>Pagamento</h1>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </header>

          <Payments>
            <span>
              <CreditCard size={20} /> Cartão de crédito
            </span>
            <span>
              <Bank size={20} /> cartão de débito
            </span>
            <span>
              <Money size={20} /> dinheiro
            </span>
          </Payments>
        </PaymentContainer>
      </AddressContainer>

      <CartCheckout>
        <h1>selecionados</h1>

        <CartContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <PriceContainer>
            <ul>
              <li>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </li>
              <li>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </li>
              <li>
                <strong>Total</strong>
                <strong>R$ 3,50</strong>
              </li>
            </ul>
          </PriceContainer>
          <button type="button">Confirmar pedido</button>
        </CartContainer>
      </CartCheckout>
    </CheckoutContainer>
  );
}
