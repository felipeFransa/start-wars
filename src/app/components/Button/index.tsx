"use client"

import React from "react";

export const Button = () => {

    const handleclick = () => {
        alert("Clicou!")
    }
    return (
        <div className="w-full flex justify-end items-center">
            <button onClick={handleclick} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button>
        </div>
    )
} 