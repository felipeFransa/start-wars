import { Navbar } from "@/app/components/NavBar";
import { Button } from "@/app/components/Button";
import { Main } from "@/app/components/Main";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Main />
    </div>
  )
}
