import Link from "next/link";
import StyleButton from "./StyleButton";

export default function Navbar() {
    return (
        <div>
            <h1 className = "text-4xl pt-15 text-center">SEPTORDLE</h1>
            <nav className="text-white">
                <div className="max-w-2xl mx-auto h-20 gap-20 border-2 flex items-center justify-center text-2xl font-bold px-12 mt-5 mb-5">
                    <Link href="/">Home</Link>
                    <Link href="/game">Play</Link>
                    <Link href="/stats">Stats</Link>
                    <StyleButton/>
                </div>
            </nav>
        </div>
    )
}