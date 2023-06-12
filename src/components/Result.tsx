import { Box, Button, Typography } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { useQuizProvider } from '../providers/QuizProvider';
import { Types } from '../providers/quiz.reducer';

export const Result = ({
  gameOver,
  onRetry,
}: {
  gameOver: boolean;
  onRetry: () => void;
}) => {
  const [{ answers }, dispatch] = useQuizProvider();

  const correctAnswers = answers.filter(({ valid }) => valid);
  const score = correctAnswers.length * 10;

  const handleRetry = () => {
    dispatch({ type: Types.Reset });
    onRetry();
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {gameOver ? 'Game Over' : 'Results'}
      </Typography>
      <Typography variant="h5" sx={{ mb: 6 }}>
        {`Score: ${score}`}
      </Typography>
      <Button
        variant="text"
        size="large"
        startIcon={<ReplayIcon />}
        sx={{ width: 260 }}
        onClick={handleRetry}>
        Retry
      </Button>
    </Box>
  );
};
