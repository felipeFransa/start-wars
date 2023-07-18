"use client"

import { Navbar } from "@/app/components/NavBar";
import { Button } from "@/app/components/Button";
import { Main } from "@/app/components/Main";

export default function Home() {

  const Start = () => {alert("Start")}
  const Stop = () => {alert("Stop")}

  return (
    <div className="container mx-auto">
      <Navbar />
      <Main />
      <Button label="Start" onClick={Start}/>
      <Button label="Stop" onClick={Stop}/>
    </div>
  )
}
