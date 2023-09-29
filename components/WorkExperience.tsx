import { workExperince } from "@/data/General"

const WorkExperience = () => {
  return (
    <div className="mt-20 flex flex-col space-y-5">
      {/* this is where we put the divs for work experience */}

      <h1 className="font-bold">Past & Present</h1> 
    
      {workExperince.map((work)=>(
         <div className="flex flex-col space-y-2" key={work.id}>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
               <div className="flex flex-row space-x-2">
                  <p>{work.Company}-</p> 
                  <p className="text-zinc-500">{work.Status}</p>
               </div>
               <div>
                  {work.startDate} - {work.EndDate}
               </div>
            </div>

            <div>
               <p>{work.Description}</p>
            </div>
         </div>
      ))}
    </div>
  )
}
export default WorkExperience 