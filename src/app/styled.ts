import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.accent};
    font-family: "Just Another Hand", cursive;
    font-size: 2.5rem;
  }

  h1 {
    font-weight: bold;
    font-size: 8rem;
    width: 48rem;
    text-align: left;
    line-height: 85%;

    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 8rem;
      font-family: "Jura", sans-serif;
    }
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 5rem;
      width: 30rem;
      text-align: left;
      line-height: 85%;

      span {
        font-size: 5rem;
      }
    }

    span {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 3.5rem;
      width: 20rem;
      text-align: left;
      line-height: 85%;

      span {
        font-size: 3rem;
      }
    }

    span {
      font-size: 1.5rem;
    }
  }
`;

export const TechStack = styled.span`
  padding: 0 0.5rem;
  img {
    margin: 0 0.2rem;
  }

  @media (max-width: 900px) {
    img {
      width: 3.6rem;
      height: 3.6rem;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
