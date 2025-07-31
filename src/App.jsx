import CardNotes from "./components/CardNotes";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
  <div className="min-h-screen bg-[radial-gradient(circle,_rgba(209,107,151,1)_0%,_rgba(95,141,194,1)_100%)]">
    <Navbar />
    <CardNotes />
  </div>

  )
}