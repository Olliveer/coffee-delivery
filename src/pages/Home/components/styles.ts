import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.5rem;
  min-width: 16rem;

  background: ${(props) => props.theme['base-card']};
  width: 16rem;

  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;

  img {
    margin-top: -1.25rem;
    max-width: 7.5rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['base-label']};

    margin-bottom: 2.063rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.875rem;
    text-align: right;
    margin-bottom: 0;
    margin-right: 0.5rem;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`;

export const ButtonCart = styled.button`
  border: 0;
  line-height: 0;
  margin-left: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  color: ${(props) => props.theme.white};

  background: ${(props) => props.theme['purple-dark']};
`;

export const ButtonsAddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;

  max-height: 2rem;

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

export const Badge = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  margin: 1rem 0 1.25rem;

  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.625rem;
`;
