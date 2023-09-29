import { GeneralData } from "@/data/General"
// import img from './vibrent_16.png'
// import Image from "next/image"

//---make sure to uncomment the import Image from 'next-image' when bringing in your photo to the app directly


const General = () => {
   
  return (
    <div className="flex flex-col space-y-5 items-start">

      {/* first div */}

      <div className="flex flex-row space-x-5 items-center">
         {/* img div */}
         <div className="w-20 h-20 rounded-full">
           
            <img src={GeneralData.img} alt="profile photo"  />


             {/* if you are planning on bringing an image to the code, make sure to import it and just uncomment the code below and change the source to whatever name you called your import...fro refrence i brought in my image and put it on the components folder  */}


             {/* <Image 
             src={img}
             alt=""
             className="w-20 h-20 rounded-full" 
            
             /> */}

         </div>

         <div className="flex flex-col space-y-2">
            <h2>{GeneralData.name}</h2>
            <p className="text-sm">{GeneralData.title}</p>
         </div>
      </div>

      {/* second div  */}
      <div className="flex flex-col space-y-5">
         <p>{GeneralData.overview}</p>
         <p>{GeneralData.currentOverview}</p>
      </div>
     
      
    </div>
  )
}
export default General