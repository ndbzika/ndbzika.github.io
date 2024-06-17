import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 4rem;
  padding-bottom: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 6rem;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const FooterText = styled.h4`
  width: 80%;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 85%;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  padding: 0;
  text-align: left;
  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: 768px) {
    width: 20.5%;
  }
`;

export const Owner = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;
