import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2rem 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    span {
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`;

export const Cart = styled.button`
  line-height: 0;
  border: none;
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`;
