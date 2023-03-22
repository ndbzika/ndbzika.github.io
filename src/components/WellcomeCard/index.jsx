import { Box, Typography } from '@mui/material';

export const WellcomeCard = () => {
  return (
    <Box
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 2,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
        width: 700,
        height: 250,
        padding: 5,
        position: 'relative',
        left: '1%',
        marginTop: '8%',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        color="white"
        sx={{ fontWeight: 'bold' }}
      >
        Bem-vindo!
      </Typography>
      <Typography component="h3" variant="h4" color="white" fontStyle="italic">
        &ldquo;Não basta conquistar a sabedoria, é preciso usá-la.&ldquo;
        <Typography>~ Cícero</Typography>
      </Typography>
    </Box>
  );
};
