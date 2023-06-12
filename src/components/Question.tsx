import { useCallback, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useQuizProvider } from '../providers/QuizProvider';
import { QUESTIONS } from '../data/questions';
import { Types } from '../providers/quiz.reducer';
import { QuestionForm } from './QuestionForm';

export const Question = ({ onViewResults }: { onViewResults: () => void }) => {
  const [{ answers }, dispatch] = useQuizProvider();

  const [questionNumber, setQuestionNumber] = useState(0);

  const question = QUESTIONS[questionNumber];
  const answer = answers.find(({ id }) => id === question.id);
  const isLastQuestion = questionNumber + 1 === QUESTIONS.length;

  const handleChange = useCallback(
    (answer: number, valid: boolean) => {
      dispatch({
        type: Types.Answer,
        payload: {
          id: question.id,
          answer,
          valid,
        },
      });
    },
    [question.id, dispatch]
  );

  const handleNextQuestion = () => {
    setQuestionNumber((currentValue) => currentValue + 1);
  };

  return (
    <Box sx={{ minWidth: 260, maxWidth: 400 }}>
      <Typography variant="h4">
        {`Question ${questionNumber + 1} / ${QUESTIONS.length}`}
      </Typography>
      <QuestionForm
        key={question.id}
        data={question}
        value={answer?.answer}
        onChange={handleChange}
      />
      <Box sx={{ minHeight: 43 }}>
        {answer && !isLastQuestion ? (
          <Button
            variant="text"
            size="large"
            sx={{ width: 260 }}
            onClick={handleNextQuestion}>
            Next Question
          </Button>
        ) : null}
        {answer && isLastQuestion ? (
          <Button
            variant="text"
            size="large"
            sx={{ width: 260 }}
            onClick={onViewResults}>
            View Results
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};
