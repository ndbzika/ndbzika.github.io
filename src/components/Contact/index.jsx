import P from 'prop-types';
import { Box, Link, Typography } from '@mui/material';

export const Contact = ({ link, icon, children, color }) => {
  return (
    <Box>
      <Link underline="none" href={link}>
        <Box
          sx={{
            color: { color },
            display: 'flex',
            justifyContent: 'center',
            padding: '5px',
          }}
        >
          {icon}
        </Box>
        <Typography variant="p" component="div" sx={{ color: '#fff' }}>
          {children}
        </Typography>
      </Link>
    </Box>
  );
};

Contact.propTypes = {
  link: P.string.isRequired,
  icon: P.node.isRequired,
  children: P.string.isRequired,
  color: P.string.isRequired,
};
