import { Layout } from './Layout';
import { Intro } from './Intro';
import { HealthIndicator } from './HealthIndicator';
import { Question } from './Question';
import { Result } from './Result';
import { useCallback, useState } from 'react';
import { useQuizState } from '../providers/QuizProvider';

export const Quiz = () => {
  const { health } = useQuizState();
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleStart = useCallback(() => {
    setShowQuiz(true);
    setShowResults(false);
  }, []);

  const handleViewResults = useCallback(() => {
    setShowResults(true);
    setShowQuiz(false);
  }, []);

  const gameOver = health === 0;

  return (
    <Layout>
      {!showQuiz && !showResults ? <Intro onStart={handleStart} /> : null}
      {showQuiz || showResults ? <HealthIndicator /> : null}
      {showQuiz && !gameOver ? (
        <Question onViewResults={handleViewResults} />
      ) : null}
      {showResults || gameOver ? (
        <Result gameOver={gameOver} onRetry={handleStart} />
      ) : null}
    </Layout>
  );
};
