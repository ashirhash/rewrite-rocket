"use client"

import { useState } from "react";
import Evaluation from "@/components/Evaluation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageTabs from "@/components/LanguageTabs";





const modes = [
  {
    language: "english",
    tones: ["standard", "natural", "formal", "informal", "funny"]
  },
  {
    language: "spanish",
    tones: ["natural", "formal", "standard"]
  },
  {
    language: "french",
    tones: ["formal", "standard", "natural"]
  }
];



export default function Home() {
  const [activeStyle, setActiveStyle] = useState<string>(modes[0]?.tones[0]);
  return (
    <>
      <Header />
      <LanguageTabs activeStyle={activeStyle} setActiveStyle={setActiveStyle} modes={modes} />
      <Evaluation activeStyle={activeStyle} />
      <Footer />
    </>
  );
}
