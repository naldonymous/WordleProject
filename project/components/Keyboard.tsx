const KEYBOARD = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
];

export const Keyboard = ({onKey}: {onKey: (key: string) => void}) => {
    return (
        <div className = "flex flex-col items-center gap-2 w-full">
            {KEYBOARD.map((row, i) => (
                <div key = {i} className = "flex gap-2">
                    {row.map ((key) => (
                        <button key = {key}
                                onClick={() => onKey(key)}
                                className = "h-14 w-14 bg-gray-500 uppercase rounded">
                                {key === "BACKSPACE" ? "⌫": key === "ENTER" ? "↵": key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};