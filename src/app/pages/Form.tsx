import React, { useState } from "react"

type Props = {
    onClick: () => void;
}

export const Form = ({ onClick }: Props) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<number>()

    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center ">
            <div className="w-72 h-72 sm:w-96 sm:h-96  flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
                <h1 className="text-5xl mb-2">Login</h1>
                <form onSubmit={onClick}>
                    <div className="mb-2">
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Digite sua email:" className="p-2 text-black rounded-md hover:outline outline-offset-2 outline-blue-500" />
                    </div>
                    <div className="mb-2">
                        <input type="password" value={password} placeholder="Digite sua senha:" className="p-2 text-black rounded-md hover:outline outline-offset-2 outline-blue-500"/>
                    </div>
                    <div className="mb-2 flex justify-center items-center bg-blue-600 hover:bg-blue-800 rounded-md">
                        <input type="submit" value="Enviar" className="p-1 hover:cursor-pointer"/>
                    </div>
                </form>
            </div>
        </div>
    )
}