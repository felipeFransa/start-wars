import React, { useState } from "react";
import LogoStarWars from "@/app/assets/starwarslogo.svg.png";

export const Navbar: React.FC = () => {
  // const [search, setSearch] = useState("Pesquisa")

  const searchInput = () => {
    return
  }

  return (
    <nav className="bg-black mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row items-center sm:justify-between h-16">
          
          <div className="hidden sm:flex">
            <a href="#" className="flex items-center">
              <img className="h-8 w-14" src={LogoStarWars.src} alt="Logo" />
            </a>
          </div>

          <div className="flex w-full h-full justify-center sm:justify-end items-center">
            <form action="#" method="POST">
              <div className="flex">
                <input type="text" placeholder="Pesquisar" className="px-2 py-1.5 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="px-4 py-1.5 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Buscar</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </nav>
  );
};
