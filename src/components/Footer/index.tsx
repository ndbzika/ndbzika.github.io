import { FooterContainer, FooterText, Owner } from './styled'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Transformando suas <span>ideias</span> em <span>realidade!</span></FooterText>
      <Owner>© {Date().split(' ')[3]} fhms.dev.br</Owner>
    </FooterContainer>
  )
}
