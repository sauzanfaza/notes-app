import CardNotes from "./components/CardNotes";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  
  return (
  <>
  <div className="min-h-screen bg-[radial-gradient(circle,_rgba(209,107,151,1)_0%,_rgba(95,141,194,1)_100%)]">
    <Navbar search={search} setSearch={setSearch}/>
    <CardNotes search={search}/>
  </div>
  </>

  )
}