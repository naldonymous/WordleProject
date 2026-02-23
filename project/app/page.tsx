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
    }, [currGuess, gameOver]);

  return (
    <main>
        <h1>Wordle Project</h1>
        <Navbar/>
    </main>
  );
}
