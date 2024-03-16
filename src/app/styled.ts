import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30vw;
  height: 50vh;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Info = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: left;
`;

export const HStack = styled.div`
  display: flex;
  justify-content: space-around;
  width: 8rem;

  a {
    color: #993399;
  }
`;
