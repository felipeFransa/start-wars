import MainStarWars from "@/app/assets/starwarslogo.svg.png";

export const Main = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full">

            <div className="w-full h-96 flex justify-center items-center">
                <img src={MainStarWars.src} alt="" className="w-auto h-96" />
            </div>
            <div className="w-full h-96 flex flex-col justify-around items-center">
                <div className="w-full h-12 flex justify-center items-center">
                    <h3 className="text-3xl font-bold">Star Wars</h3>
                </div>
                <div className="w-full h-12 flex justify-center items-center">
                    <p className="text-base text-end mr-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque id quae unde. Voluptates recusandae laborum maiores harum, nihil molestiae ipsam neque? Voluptatem optio, totam laboriosam non explicabo nobis doloribus!</p>
                </div>
            </div>
        </div>
    )
}