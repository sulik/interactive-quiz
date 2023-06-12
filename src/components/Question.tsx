import { useCallback, useState } from 'react';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import { useQuizProvider } from '../providers/QuizProvider';
import { QUESTIONS } from '../data/questions';
import { Types } from '../providers/quiz.reducer';
import { QuestionForm } from './QuestionForm';
import QuizIcon from '@mui/icons-material/Quiz';

const sortedQuestions = QUESTIONS.sort((a, b) =>
  a.weight < b.weight ? -1 : 1
);

const getHint = (answer: number): number => {
  const hint = Math.floor(Math.random() * 4);
  return hint === answer ? getHint(answer) : hint;
};

export const Question = ({ onViewResults }: { onViewResults: () => void }) => {
  const [{ answers }, dispatch] = useQuizProvider();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [hint, setHint] = useState(-1);

  const question = sortedQuestions[questionNumber];
  const answer = answers.find(({ id }) => id === question.id);
  const isLastQuestion = questionNumber + 1 === QUESTIONS.length;
  const isHintUsed = hint !== -1;

  const handleChange = useCallback(
    (answer: number, valid: boolean) => {
      dispatch({
        type: Types.Answer,
        payload: {
          id: question.id,
          weight: question.weight,
          hint: isHintUsed,
          answer,
          valid,
        },
      });
      setHint(-1);
    },
    [dispatch, isHintUsed, question.id, question.weight]
  );

  const handleNextQuestion = () => {
    setQuestionNumber((currentValue) => currentValue + 1);
  };

  const handleHint = () => {
    setHint(getHint(question.answer));
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
        hint={hint}
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
        {!answer && !isHintUsed ? (
          <Box>
            <Tooltip title="This will halve the points for the question">
              <Button
                variant="text"
                size="large"
                color="warning"
                sx={{ width: 260 }}
                startIcon={<QuizIcon />}
                onClick={handleHint}>
                Hint
              </Button>
            </Tooltip>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
