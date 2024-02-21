import Workspace from "../../assets/retro.jpeg"
import Video from "../../assets/bento.svg"
import  Image1 from "../../assets/pro.png"
import Image2 from "../../assets/roles.jpg"




function Card(){
    
      return(
            


        <div className="h-15 grid grid-cols-1 sm:grid-cols-2 md:black-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-12 border-inherit">
            {/* Replace this with your grid items */}

            <div className="transition duration-800 ease-in-out
                        bg-black-300 hover:bg-grey-600 transform
                        hover:-translate-y-1 hover:scale-80
                        rounded-lg  p-4 border border-blue-400">
              <img
                src={Workspace}
                height={600}
                width={600}

                alt="Placeholder Image"
                className="object-center"
              />

             
            </div>


             <div className="transition duration-800 ease-in-out
                        bg-black-300 hover:bg-grey-600 transform
                        hover:-translate-y-1 hover:scale-80
                        rounded-lg p-4 border border-gray-100">
              <img

                src={Image2}
                height={600}
                width={600}

                alt="Placeholder Image"
                className=""
              />

            </div>         

             <div className="transition duration-800 ease-in-out
                        bg-black-300 hover:bg-grey-600 transform
                        hover:-translate-y-1 hover:scale-80
                        rounded-lg p-4 border border-gray-100">
              <img
                src={Image1}
                height={400}
                width={600}

                alt="Placeholder Image"
                className=""
              />

            </div>


            <div className="transition duration-800 ease-in-out
                        bg-black-200 hover:bg-grey-500 transform
                        hover:-translate-y-1 hover:scale-80
                        rounded-lg p-4 border border-gray-100">
              <img
                src={Video}
                height={400}
                width={600}

                alt="Placeholder Image"
                className="object-none  bg-yellow-300   ..."
              />



              
             
            </div>
             
       
        {/* Add more items as needed */}
      </div>



  )
}

export default Card