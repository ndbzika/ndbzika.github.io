import styled from "styled-components";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaChevronLeft } from "react-icons/fa";

export const Container = styled.header`
  z-index: 10;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;
  padding: 3rem;
  height: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    height: 3rem;
    padding: 1rem;
  }
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AnchorLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 85%;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Dash = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.1rem;
  padding: 0.5rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Github = styled(FaGithub)`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2rem;
  transition: 0.3s;
`;

export const Linkedin = styled(FaLinkedin)`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2rem;
  transition: 0.3s;
`;

export const IconButton = styled.button`
  position: absolute;
  top: 10%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export const HamgurberIcon = styled(FaBars)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CloseIcon = styled(FaChevronLeft)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarWrapper = styled.div<SidebarProps>`
  width: 50vw;
  height: 100vh;
  color: #fff;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  z-index: 9;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.text};
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 0.8rem;
      text-align: center;

      span {
        display: none;
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
