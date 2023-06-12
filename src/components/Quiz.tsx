import { Layout } from './Layout';
import { Intro } from './Intro';
import { Question } from './Question';
import { Result } from './Result';
import { useCallback, useState } from 'react';

export const Quiz = () => {
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

  return (
    <Layout>
      {!showQuiz && !showResults ? <Intro onStart={handleStart} /> : null}
      {showQuiz ? <Question onViewResults={handleViewResults} /> : null}
      {showResults ? <Result onRetry={handleStart} /> : null}
    </Layout>
  );
};
