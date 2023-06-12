import { TOTAL_HEALTH } from '../constants';

type Answer = {
  id: string;
  answer: number;
  valid: boolean;
  points: number;
};

export interface QuizState {
  answers: Answer[];
  health: number;
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
    weight: number;
  };
  [Types.Reset]: undefined;
};

export type QuizActions = ActionMap<QuizPayload>[keyof ActionMap<QuizPayload>];

export const initialState = {
  answers: [],
  health: TOTAL_HEALTH,
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
            points: action.payload.valid ? action.payload.weight * 100 : 0,
          },
        ],
        health: !action.payload.valid ? state.health - 1 : state.health,
      };
    }
    case Types.Reset: {
      return {
        ...initialState,
      };
    }
  }
};
