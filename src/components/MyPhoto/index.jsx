import { Avatar } from '@mui/material';
import Photo from '../../images/flavio.png';
export const MyPhoto = () => {
  return (
    <Avatar
      src={Photo}
      alt="Flávio Henrique"
      sx={{ width: 500, height: 500 }}
    />
  );
};
