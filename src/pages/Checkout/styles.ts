import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;

  padding: 0 10rem 10rem;

  transition: all 0.5s;

  @media (max-width: 700px) {
    padding: 0 0.5rem;

    grid-template-columns: 1fr;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;

  > h1 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.938rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const Address = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;

    div {
      > h1 {
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme['base-subtitle']};
      }
      > span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const BaseInput = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const NumberComplementContainer = styled(BaseInput)`
  grid-template-columns: 200px auto;

  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

export const PostalCode = styled(BaseInput)`
  grid-template-columns: 200px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const CityUfContainer = styled(BaseInput)`
  grid-template-columns: 200px auto 60px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const AddressInput = styled.input`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};
`;

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;

    div {
      > h1 {
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme['base-subtitle']};
      }
      > span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    svg {
      color: ${(props) => props.theme['purple']};
    }
  }
`;

export const Payments = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  > span {
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    line-height: 1.6;

    padding: 1rem;
    border-radius: 6px;

    background: ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme.purple};
      line-height: 1.6;
      margin-right: 0.75rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    > span {
      text-align: center;
    }
  }
`;

export const CartCheckout = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;

  > h1 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.938rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  > header {
    flex: 1;
    align-items: flex-start;
  }

  > button {
    border-radius: 6px;
    border: 0;
    width: 100%;
    height: 2.875rem;
    margin-top: 1.5rem;
    background: ${(props) => props.theme['yellow']};

    color: ${(props) => props.theme['white']};
    font-size: 0.875rem;
    font-stretch: 100;
    line-height: 1.6;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  ul {
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
`;
