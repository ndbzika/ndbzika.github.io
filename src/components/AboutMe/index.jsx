import { Box, Typography } from '@mui/material';

export const AboutMe = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{
        minWidth: '60vw',
        backgroundColor: '#282828',
        padding: '2.5rem',
        borderRadius: '5px',
      }}
    >
      <Typography
        variant="h2"
        component="div"
        textAlign="center"
        className="about-me-titulo"
        sx={{ fontWeight: 'bold' }}
      >
        Quem é Flávio?
      </Typography>
      <Typography
        variant="h5"
        component="p"
        textAlign="center"
        className="about-me-texto"
      >
        Olá, meu nome é Flávio Henrique e atualmente curso Análise e
        Desenvolvimento de Sistemas no IFPB campus Cajazeiras. Entusiasta de
        Front-End e amante da aprendizagem, gosto de desafios evoluir cada dia
        mais meus conhecimentos.
      </Typography>
    </Box>
  );
};
