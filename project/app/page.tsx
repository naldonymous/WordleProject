"use client";
import {useState, useEffect} from "react";
import {VALID_GUESSES} from "@/data/words";
import {Keyboard} from "@/components/Keyboard"
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className = "flex flex-col items-center">
        <h1>Wordle Project</h1>
        <Navbar/>
    </main>
  );
}
