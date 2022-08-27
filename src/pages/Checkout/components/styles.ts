import styled from 'styled-components';

export const CoffeeContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;
  padding: 0.25rem 0.5rem 0 0.5rem;
  margin-bottom: 1.5rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CoffeeCheckout = styled.div`
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > button:last-child {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
    border-radius: 6px;
    border: 0;
    width: 5.688rem;
    cursor: pointer;

    font-size: 0.75rem;
    text-transform: uppercase;

    svg {
      color: ${(props) => props.theme['purple']};
      margin-right: 0.25rem;
      vertical-align: middle;
    }
  }
`;

export const ButtonsAddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;

  height: 2rem;
  width: 4.5rem;

  background: ${(props) => props.theme['base-button']};

  span {
    margin: 0;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }

  button {
    border: 0;
    line-height: 0;
    color: ${(props) => props.theme.purple};
    background: transparent;
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 1.5rem;
`;
