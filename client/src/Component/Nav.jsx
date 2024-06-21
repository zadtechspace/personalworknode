import { Link, Outlet } from "react-router-dom"
import comfortbaselogo from "../assets/image/comfortbaselogo.jpg"
import menu from "../assets/image/menu.png"


const Nav = () => {
    const navLink = [
     
        {
            name: "sign up",
            path: "/signup"
        },
        {
            name: 'sign in',
            path: "signin"
        }
    ]

    function menuBtn () {
       if (menuitems.classList.contains('hidden')) {
            menuitems.classList.remove('hidden')
       }else{
        menuitems.classList.add('hidden')
       }
    }
   

    
    
  return (
    <div className="p-1 md:p-2 ">
       <section className="hidden md:flex justify-between items-center md:shadow-md  md:rounded-full  md:px-4 md:py-2">   
            <div className="shadow-md p-1 rounded-full"> 
               <Link to={"/home"}><img src={comfortbaselogo} alt="" className="w-12 rounded-full"/></Link> 
            </div>

            <div className="flex flex-col gap-3 items-end">
                
                <ul className=" hidden flex-col items-end gap-6 font-semibold text-xs px-2 py-1 w-full md:flex md:flex-row md:text-sm" >
                    {navLink.map((link, index)=>(
                    <li key={index} className="md:shadow-md bg-white md:px-4 md:py-1 md:rounded-3xl" >
                        
                        <Link to={link.path} className=" font-semibold border-r-1  border-red-500 md:pr-0 md:border-none">{link.name}</Link>
                    </li>
                    ))}
                </ul>
            </div>

        </section>

          
       <section className=" md:hidden">  

            <div className="shadow-md p-1 rounded-full flex justify-between items-center"> 

             <img src={comfortbaselogo} alt="" className="w-10 rounded-full"/>

             <img src={menu} alt="" className="w-10 md:hidden" onClick={menuBtn}/>
             
            </div>

            
                
            <ul className=" hidden mt-3 space-y-2 " id="menuitems" >
                    {navLink.map((link, index)=>(
                    <li key={index} className="pl-2" >
                        
                        <Link to={link.path} className=" font-semibold border-l-4 pl-3 border-red-500 text-sm">{link.name}</Link>
                    </li>
                    ))}
            </ul>

        </section>

       <Outlet/>   
        
    </div>
  )
}

export default Nav