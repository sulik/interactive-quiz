import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';
import {
  quizReducer,
  initialState,
  QuizActions,
  QuizState,
} from './quiz.reducer';

export const QuizStateContext = createContext<QuizState>(initialState);
export const QuizDispatchContext = createContext<Dispatch<QuizActions>>(
  () => null
);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  );
};

export const useQuizState = () => {
  const context = useContext(QuizStateContext);

  if (context === undefined) {
    throw new Error('useQuizState must be used within a QuizProvider');
  }

  return context;
};

export const useQuizDispatch = () => {
  const dispatch = useContext(QuizDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useQuizDispatch must be used within a QuizProvider');
  }

  return dispatch;
};

export const useQuizProvider: () => [QuizState, Dispatch<QuizActions>] = () => {
  return [useQuizState(), useQuizDispatch()];
};
