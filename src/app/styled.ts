import styled from 'styled-components';

export const MainContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px){
    flex-direction: row;
  }
`;

interface ContainerProps {
  hasheader?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px){
    ${({ hasheader, theme }) => {
      return hasheader &&
       (`background: ${theme.colors.primary};
        border-radius: 10px;
        width: 90%;
        border: 1px solid #FFFFFF;
        padding: 0 1.88rem;
        `)
    }}
  }
`;

export const Title = styled.h1`
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
`;

export const PreTilte = styled.span`
  display: inline-block;
  font-weight: 200;
  font-size: 1.5rem;
`;

export const TitleText = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 900;
`;

export const TitleCursor = styled.span`
`;


export const Text = styled.p`
  width: 100%;
  margin-bottom: 3.25rem;
  font-size: 1.5rem;
  min-width: 17.188rem;

  @media (min-width: 768px) {
    max-width: 30.25rem;
    font-size: 1.2rem;
  }
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 2.5rem;
  font-weight: lighter;
  font-size: 2rem;
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const AvalibleProject = styled.li`
  width: fit-content;
  font-size: 1.2rem;
  font-weight: 200;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s;
`;

export const UnavalibleProject = styled.li`
  width: fit-content;
  font-size: 1rem;
  font-weight: 200;

  a {
    cursor: not-allowed;
    text-decoration: underline;
    color: #FFFFFF;
    opacity: .25;
  }
`;
