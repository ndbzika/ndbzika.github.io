import P from 'prop-types';

import { Box, Container, Typography } from '@mui/material';

export const Footer = ({ children }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}
      >
        Contatos
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          justifyContent: 'center',
          padding: '30px',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

Footer.propTypes = {
  children: P.node.isRequired,
};
