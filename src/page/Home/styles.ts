import styled from 'styled-components';
import imageIntro from '../../assets/background-intro.svg';

export const HomeContainer = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5.875rem 0 6.75rem 0;

  background-image: url(${imageIntro});
`;

export const TextSection = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.3;

  color: ${(props) => props.theme['base-subtitle']};
  font-stretch: 100;
`;

export const ItemsIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
  }
`;

const ITEMS_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const;

interface ItemsProps {
  itemColor: keyof typeof ITEMS_COLOR;
}

export const Item = styled.span<ItemsProps>`
  line-height: 0;
  margin-right: 0.75rem;
  padding: 0.5rem;
  background: ${(props) => props.theme[ITEMS_COLOR[props.itemColor]]};
  border-radius: 999px;

  svg {
    color: ${(props) => props.theme.white};
  }
`;
