import { Container } from '@mui/material';

import { WellcomeCard } from '../WellcomeCard/index';
import { MyPhoto } from '../MyPhoto';

export const PrincipalPage = () => {
  return (
    <Container
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        top: '10vh',
      }}
    >
      <WellcomeCard />
      <MyPhoto />
    </Container>
  );
};
