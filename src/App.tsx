import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Quiz } from './components/Quiz';
import { QuizProvider } from './providers/QuizProvider';

function App() {
  return (
    <>
      <CssBaseline />
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </>
  );
}

export default App;
