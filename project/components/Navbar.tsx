import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="text-white">
            <div className="w-full h-20 gap-20 border-2 flex items-center justify-center text-2xl font-bold">
                <Link href="/">Home</Link>
                <Link href="/game">Play</Link>
                <Link href="/stats">Stats</Link>
            </div>
        </nav>
    )
}