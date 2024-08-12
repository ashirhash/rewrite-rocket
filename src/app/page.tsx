import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageTabs from "@/components/LanguageTabs";

const modes = [
  {
    language: "english",
    modes: ["standard", "natural", "formal"]
  },
  {
    language: "spanish",
    modes: ["natural", "formal", "standard"]
  },
  {
    language: "french",
    modes: ["formal", "standard", "natural"]
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <LanguageTabs modes={modes} />
      <Footer />
    </>
  );
}
