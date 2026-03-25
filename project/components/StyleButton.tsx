'use client'
import {useState, useEffect} from "react";

export default function StyleButton() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const top = window.document.documentElement;
        if (isDark) {
            top.classList.add("dark");
        } else {
            top.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <div>
            <button onClick = {() => setIsDark(!isDark)}
                className="
                    bg-white-200
                    dark: bg-zinc-800
                    cursor-pointer active: 50
                ">
                {isDark ? "darkMode" : "lightMode"}
            </button>
        </div>
    )
}