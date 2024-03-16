import styled from 'styled-components';


export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.background};

  h2 {
    color: ${({ theme }) => theme.colors?.text};
  }
`;
