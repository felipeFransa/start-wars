import React, { useState } from "react";
import LogoStarWars from "@/app/assets/starwarslogo.svg.png";

export const Navbar: React.FC = () => {
  // const [search, setSearch] = useState("Pesquisa")

  const searchInput = () => {
    return
  }

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img className="h-8 w-14" src={LogoStarWars.src} alt="Logo" />
              {/* <span className="text-white ml-2">Meu Site</span> */}
            </a>
          </div>

          {/* Barra de Pesquisa */}
          <div className="flex-shrink-0">
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
