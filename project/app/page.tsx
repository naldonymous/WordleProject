"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
    // The daily solution, will make it random later (!!!).
    const [solution, setSolution] = useState("LOREM");
    // The array of guesses (string).
    const [guesses, setGuesses] = useState<string[]>([]);
    // The current guess.
    const [currGuess, setCurrGuess] = useState("");
    // Status of game (is the game over).
    const [gameOver, setGameOver] = useState(false);

    /* Event listener for all cases for guesses, has to address:
        1. The game being over, then just end the game.
        2. If the user presses "backspace" to remove a letter.
        3. If the user enters an invalid input (a. characters are not letters, or b. guess becomes too long).
        4. If the user enters a valid input.
        5. If the user presses enter (a. add colours to previous guess,
           b. end game if correct, c. add new row if incorrect, d. invalid if over 5 letters).
    */
    useEffect(() => {
        const keyUsed = (e: KeyboardEvent) => {
            // Case 1:
            if (gameOver) {
                return;
            }
            
            // Case 2: If 'Backspace', set current guess to current string minus last letter
            if (e.key === 'Backspace') {
                setCurrGuess(prev => prev.slice(0, -1));
                return;
            }

            // Case 5: If 'Enter'
            if (e.key === 'Enter') {
                // 5d
                if (currGuess.length !== 5) {
                    return;
                }
                // New list with currGuess
                setGuesses(prev => [...prev, currGuess]);
                // Set currGuess to empty
                setCurrGuess("");
                return;
            }
        
            // Case 4:
            if (currGuess.length < 5 && /^[a-z]$/i.test(e.key)) {
                setCurrGuess(prev => prev + e.key.toUpperCase());
            }
        };
    
        // add the Event Listener defined above to window
        window.addEventListener("keydown", keyUsed);
        // return cleanup function
        return () => window.removeEventListener("keydown", keyUsed);
        // dependencies (so if currGuess or gameOver changes, rerun component)
    }, [currGuess, gameOver, guesses.length, solution]);

  const letterColor = (letter: string, index: number) => {
    // if no letter, then just return it
    if (!letter) {
        return;
    }

    // split each letter up for the solution
    const solutionLetters = solution.split("");
    // make it all uppercase (wordle-like AND easier to work with)
    const upperLetter = letter.toUpperCase();

    // if the letter is the same as the solution at the same spot, green!
    if (upperLetter === solutionLetters[index]) {
        return "bg-green-600";
    }

    // if the letter is IN the word but not in the same spot, yellow
    // TODO: implementing behaviour for letters appearing in word multiple times
    if (solutionLetters.includes(upperLetter)) {
        return "bg-yellow-600";
    }

    // otherwise it's incorrect entirely, make it grey
    return "bg-zinc-700";
  }

  return (
    <main className = "flex flex-col items-center">
        <h1>Wordle Project</h1>
        <Navbar/>
        <div className = "grid gap-2">
            {[... Array(6)].map((_, rowIndex) => {
                const pastGuess = rowIndex < guesses.length;
                const currentGuess = rowIndex === guesses.length;
                const rowWord = pastGuess ? guesses[rowIndex] : currentGuess ? currGuess : "";

                return (
                    <div key = {rowIndex} className = "flex gap-2">
                        {[... Array(5)].map((_, letterIndex) => {
                            const letter = rowWord[letterIndex];
                            const pickcolor = pastGuess ? letterColor(letter, letterIndex) : "border-zinc-700";

                            return (
                                <div key = {letterIndex}
                                    className={`w-14 h-14 border-2 flex items-center ${pickcolor}`}>
                                    {letter}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>  
    </main>
  );
}
