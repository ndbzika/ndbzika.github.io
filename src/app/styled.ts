import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HomeSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;

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

//////////////

export const AboutSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  width: 100%;

  h2 {
    align-self: flex-start;
    font-weight: bold;
    font-size: 4rem;
    text-align: left;
    line-height: 95%;
    margin-left: 10%;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

interface DividerProps {
  color: string;
}

export const Divider = styled.div<DividerProps>`
  align-self: flex-start;
  max-width: 37.5rem;
  width: 100%;
  height: 1px;
  background-color: ${({ color, theme }) => theme.colors[color]};
  margin-bottom: 1rem;
  margin-left: 10%;

  @media (max-width: 700px) {
    max-width: 30rem;
  }

  @media (max-width: 600px) {
    max-width: 25rem;
  }

  @media (max-width: 500px) {
    max-width: 20rem;
  }

  @media (max-width: 400px) {
    max-width: 15rem;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  width: 80%;
  max-height: 24rem;
  padding: 3.2rem;
  height: 100%;
  border-radius: 0.9rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 46.2rem;
    gap: 1.7rem;

    p {
      font-size: 1.5rem;
      line-height: 130%;
      text-align: justify;
      font-family: "Rubik", sans-serif;
    }
  }
  @media (max-width: 1350px) {
    div {
      width: 40rem;
    }
  }

  @media (max-width: 1200px) {
    div {
      width: 35rem;
    }
  }

  @media (max-width: 1100px) {
    div {
      width: 30rem;
      padding: 2rem 0;
    }
  }

  @media (max-width: 1050px) {
    max-height: 100%;
    height: 40rem;
    flex-direction: column;
    div {
      p {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 700px) {
    div {
      width: 25rem;
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 600px) {
    div {
      width: 20rem;
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 500px) {
    div {
      width: 15rem;
      p {
        font-size: 0.9rem;
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem -8rem;

    @media (max-width: 1350px) {
      margin: 1rem -6rem;
    }

    @media (max-width: 1050px) {
      position: relative;
      margin: 0;
    }

    @media (max-width: 600px) {
      margin: 0;
      width: 20rem;
      height: 20rem;
    }

    @media (max-width: 500px) {
      width: 15rem;
      height: 15rem;
    }
  }
`;
//////////////

export const PassionSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  padding: 5rem 0;

  h2 {
    align-self: flex-start;
    font-weight: bold;
    font-size: 4rem;
    text-align: left;
    line-height: 95%;
    margin-left: 10%;
    color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const PassionCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin-top: 5rem;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const PassionCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 25rem;
  width: 100%;
  max-height: 38rem;
  padding: 3.2rem;
  height: 100%;
  border-radius: 0.9rem;

  h3 {
    font-size: 1.5rem;
    line-height: 130%;
    text-align: center;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
  }

  p {
    font-size: 1.3rem;
    line-height: 130%;
    text-align: center;
    font-family: "Rubik", sans-serif;
  }

  @media (max-width: 1050px) {
    max-height: 100%;
    height: 40rem;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 700px) {
    img {
      width: 8rem;
      height: 8rem;
    }
    max-width: 20rem;
    height: 100%;
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 6.3rem;
      height: 6.3rem;
    }
    max-width: 20rem;
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 500px) {
    max-width: 15rem;
    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
