import styled from 'styled-components';

export const Form = styled.form`
  padding: 2rem;
  flex-basis: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w');
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333;
    opacity: 0.2;
  }

  button {
    position: relative;
    z-index: 900;
  }
`;
export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  margin-bottom: 1rem;
`;

export const FieldControls = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    max-height: 10rem;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #aaa;
      border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #999;
    }
  }
`;

export const Wrap = styled.div`
  margin-bottom: 1rem;
  display: flex;

  div {
    width: 100%;
  }
`;
