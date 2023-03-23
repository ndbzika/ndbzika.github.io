import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

export const Repositories = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ndbzika/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  });

  return repositories.map((repository) => {
    return (
      <Card
        sx={{ minWidth: 350, maxHeight: 300, borderRadius: 3 }}
        key={repository.keys_url}
      >
        <a
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={repository.owner.avatar_url}
              alt="calculadora"
            />
            <CardContent sx={{ backgroundColor: '#282828' }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: '#fff' }}
              >
                {repository.name}
              </Typography>
              <Typography sx={{ color: '#fff' }}>
                {repository.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
      </Card>
    );
  });
};
