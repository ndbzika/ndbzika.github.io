import { Avatar, Box, Container, Typography } from '@mui/material';

export const PrincipalPage = () => {
  return (
    <Container
      sx={{ paddingTop: 22, display: 'flex', gap: 10, alignItems: 'center' }}
    >
      <Avatar
        alt="Flávio Henrique"
        src="https://thumbs2.imgbox.com/90/b9/0HtrPDN8_t.png"
        sx={{ width: 400, height: 400, flexGrow: 0 }}
      />
      <Box
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexGrow: 2,
          textAlign: 'center',
          backgroundColor: 'white',
          borderRadius: 5,
          width: 300,
          height: 250,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          color="darkblue"
          sx={{ fontWeight: 'bold' }}
        >
          Flávio
        </Typography>
        <Typography
          component="h3"
          variant="h4"
          color="darkblue"
          fontStyle="italic"
        >
          &ldquo;Não basta conquistar a sabedoria, é preciso usá-la.&ldquo;
          <Typography>~ Cícero</Typography>
        </Typography>
      </Box>
    </Container>
  );
};
