type Answer = {
  id: string;
  answer: number;
  valid: boolean;
};

export interface QuizState {
  answers: Answer[];
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Answer = 'ANSWER',
  Reset = 'RESET',
}

type QuizPayload = {
  [Types.Answer]: {
    id: string;
    answer: number;
    valid: boolean;
  };
  [Types.Reset]: undefined;
};

export type QuizActions = ActionMap<QuizPayload>[keyof ActionMap<QuizPayload>];

export const initialState = {
  answers: [],
};
export const quizReducer = (state: QuizState, action: QuizActions) => {
  switch (action.type) {
    case Types.Answer: {
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            id: action.payload.id,
            answer: action.payload.answer,
            valid: action.payload.valid,
          },
        ],
      };
    }
    case Types.Reset: {
      return {
        ...initialState,
      };
    }
  }
};
