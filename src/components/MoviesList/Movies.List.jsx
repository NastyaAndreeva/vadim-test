import { useLocation } from 'react-router-dom';
import { Box } from '../Box/Box';
import { Link } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box mt="l" px="l">
      {movies.map(({ id, title }) => {
        return (
          <Box p="s" key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
            ;
          </Box>
        );
      })}
    </Box>
  );
};
