import { Box, Button, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const Intro = ({ onStart }: { onStart: () => void }) => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: '3rem', sm: '3.75rem' }, mb: 3 }}>
        Interactive Quiz
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        The quiz consists of 10 questions. <br />
        Each question has one correct answer.
      </Typography>
      <Button
        autoFocus
        variant="text"
        size="large"
        startIcon={<PlayArrowIcon />}
        sx={{ width: 260 }}
        onClick={onStart}>
        Start
      </Button>
    </Box>
  );
};
