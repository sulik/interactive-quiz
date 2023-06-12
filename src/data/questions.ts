export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number;
}

type Questions = Question[];

export const QUESTIONS: Questions = [
  {
    id: '1',
    question: 'In what year did man go to space for the first time?',
    options: ['1957', '1959', '1961', '1963'],
    answer: 2,
  },
  {
    id: '2',
    question: 'What is the capital of Colombia?',
    options: ['Cali', 'Bogotá', 'Medellín', 'Santa Marta'],
    answer: 1,
  },
  {
    id: '3',
    question: 'How many players there are in a rugby team?',
    options: ['11', '14', '10', '15'],
    answer: 3,
  },
  {
    id: '4',
    question: 'Who is the composer of Symphony No. 40?',
    options: [
      'Johann Sebastian Bach',
      'Wolfgang Amadeus Mozart',
      'Petr Chaikovski',
      'Antonio Vivaldi',
    ],
    answer: 1,
  },
  {
    id: '5',
    question: 'Which animal has the same amount of chromosomes (46) as human?',
    options: ['Penguin', 'Gorilla', 'Earthworm', 'Rainbow fish'],
    answer: 3,
  },
  {
    id: '6',
    question:
      "How many years did Hundred Years' War between England and France last?",
    options: ['116', '100', '94', '103'],
    answer: 0,
  },
  {
    id: '7',
    question: 'Which planet is 5th from the Sun?',
    options: ['Mercury', 'Neptune', 'Jupiter', 'Saturn'],
    answer: 2,
  },
  {
    id: '8',
    question:
      'What are the two rival families in "Romeo and Julliet" by W. Shakespeare?',
    options: [
      'Montague & Corleone',
      'Capulet & Tattaglia',
      'Montague & Capulet',
      'Corleone & Tattaglia',
    ],
    answer: 2,
  },
  {
    id: '9',
    question: 'Which country has won the most FIFA World Cups?',
    options: ['Brazil', 'Argentina', 'Spain', 'Portugal'],
    answer: 0,
  },
  {
    id: '10',
    question: 'How many faces does a Dodecahedron have? ',
    options: ['12', '8', '16', '10'],
    answer: 0,
  },
];
