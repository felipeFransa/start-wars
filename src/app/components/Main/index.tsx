import MainStarWars from "@/app/assets/starwarslogo.svg.png";

export const Main = () => {
    return (
        <div className="flex flex-row justify-center items-center w-full">

            <div className="w-full h-96 flex justify-center items-center">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio et corrupti quisquam possimus dolor autem fuga nemo error earum officia deserunt commodi, quidem maxime ea, esse, voluptatibus iste mollitia eaque!</p>
            </div>
            <div className="w-full h-96 flex justify-center items-center">
                <img src={MainStarWars.src} alt="" className="w-auto h-96" />
            </div>
            <div className="w-full h-96 flex justify-center items-center">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque id quae unde. Voluptates recusandae laborum maiores harum, nihil molestiae ipsam neque? Voluptatem optio, totam laboriosam non explicabo nobis doloribus!</p>
            </div>
        </div>
    )
}