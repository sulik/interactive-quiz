import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useQuizState } from '../providers/QuizProvider';

export const HealthIndicator = () => {
  const { health } = useQuizState();

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        top: { xs: 16, sm: 32 },
        right: { xs: 16, sm: 32 },
      }}>
      {Array.from(Array(health).keys()).map((id) => (
        <FavoriteIcon key={id} color="error" sx={{ ml: 1 }} />
      ))}
    </Box>
  );
};
