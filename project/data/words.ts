import { WORDLE_ANSWERS, WORDLE_GUESSES } from "./word-data";

export const ANSWERS = WORDLE_ANSWERS.split('\n').map(w => w.toUpperCase().trim());
export const GUESSES = WORDLE_GUESSES.split('\n').map(w => w.toUpperCase().trim());

export const VALID_GUESSES = [...ANSWERS, ...GUESSES];
