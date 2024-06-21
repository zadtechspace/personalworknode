
import rocket from "../assets/image/rocket.png"

const Home = () => {
  return (
    <div className="py-16 px-3 md:px-10 xl:py-0">
        

        <div className="flex flex-col items-center space-y-20 mt-16  md:space-y-52 xl:space-y-32 shadow-md md:p-8   rounded-xl">
            <h1 className="font-bold text-lg text-center md:text-2xl lg:text-4xl">WELCOME TO THE WORLD OF ZADTECH SPACE</h1>
            <img src={rocket} alt="" className="w-48 md:w-96 " />
        </div>
       
    </div>
  )
}

export default Home