import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: #ffe92f;
  color: #fff;
  padding: 0.5rem 0.75rem;
  font-size: 1.125rem;
  cursor: pointer;

  &:hover {
    background-color: #ffff22;
  }
`;
