import styled from 'styled-components';

export const Content = styled.article`
  height: calc(50vh);
  display: flex;
  // scroll-snap-align: start;

  :nth-child(odd) {
    background-color: #70bfff;
  }

  :nth-child(even) {
    background-color: #00c4c4;
    flex-direction: row-reverse;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  flex-basis: 40%;
`;
