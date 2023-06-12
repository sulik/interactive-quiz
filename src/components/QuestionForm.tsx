import { ChangeEvent } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Question } from '../data/questions';

const RadioLabel = ({ label = '', valid = false, selected = false }) => {
  if (!selected) {
    return <Box sx={{ mr: 4 }}>{label}</Box>;
  }
  return (
    <Box sx={{ display: 'flex', color: valid ? 'success.main' : 'error.main' }}>
      {label}
      {valid ? (
        <CheckCircleIcon color="success" sx={{ ml: 1 }} />
      ) : (
        <ErrorIcon color="error" sx={{ ml: 1 }} />
      )}
    </Box>
  );
};

export const QuestionForm = ({
  data,
  value = -1,
  hint,
  onChange,
}: {
  data: Question;
  value?: number;
  hint: number;
  onChange: (answer: number, valid: boolean) => void;
}) => {
  const isHintUsed = hint !== -1;
  const isAnswered = value !== -1;
  const isCorrectAnswer = value === data.answer;

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const answer = parseInt((event.target as HTMLInputElement).value, 10);
    onChange(answer, answer === data.answer);
  };

  return (
    <FormControl
      sx={{ mt: 4, mb: 2 }}
      color="success"
      error={isAnswered && !isCorrectAnswer}
      variant="standard">
      <FormLabel id="question-options" sx={{ mb: 1.5 }}>
        {data.question}
      </FormLabel>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <RadioGroup
          aria-labelledby="question-options"
          name="quiz"
          value={value}
          onChange={handleRadioChange}>
          {data.options.map((option = '', index = 0) => (
            <FormControlLabel
              key={option}
              control={<Radio />}
              disabled={
                isAnswered ||
                (isHintUsed && index !== hint && index !== data.answer)
              }
              value={index}
              label={
                <RadioLabel
                  label={option}
                  valid={isCorrectAnswer}
                  selected={index === value}
                />
              }
            />
          ))}
        </RadioGroup>
      </Box>
    </FormControl>
  );
};
