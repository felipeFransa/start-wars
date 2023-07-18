import MainStarWars from "@/app/assets/starwarslogo.svg.png";

export const Main = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full">

            <div className="w-full h-96 flex justify-center items-center">
                <img src={MainStarWars.src} alt="" className="w-auto h-72 sm:h-96" />
            </div>
        </div>
    )
}