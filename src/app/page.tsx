"use client"
import React, { useState } from "react";
import { Navbar } from "@/app/components/NavBar";
import { Button } from "@/app/components/Button";
import { Main } from "@/app/components/Main";
import { Form } from "@/app/pages/Form";

export default function Home() {

  const [permission, setPermissin] = useState(false)

  const handlePermission = () => {
    setPermissin(!permission)
  }

  if (permission) {
    return (
      <div className="container mx-auto">
        <Navbar />
        <Main />
        <Button label="Sair" onClick={handlePermission}/>
      </div>
    )
  }else {
    return (
      <Form onClick={handlePermission} />
    )
  }
}
