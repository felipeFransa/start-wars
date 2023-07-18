"use client"

import { Navbar } from "@/app/components/NavBar";
import { Button } from "@/app/components/Button";
import { Main } from "@/app/components/Main";
import { Form } from "@/app/pages/Form";

export default function Home() {

  const Start = () => {alert("Start")}
  const Stop = () => {alert("Stop")}

  if (false) {
    return (
      <div className="container mx-auto">
        <Navbar />
        <Main />
        <Button label="Start" onClick={Start}/>
        <Button label="Stop" onClick={Stop}/>
      </div>
    )
  }else {
    return (
      <Form />
    )
  }
}
