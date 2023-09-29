import { ProjectData } from "@/data/Projects"
import Link from "next/link"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"

const Projects = () => {
  return (
    <div className="flex flex-col items-start space-y-5 mt-10">
      <h1 className="font-bold">Projects</h1>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-[repeat(3,220px)] ">
        {ProjectData.map((projects)=>(
        
         <div className="bento-grids" key={projects.Id}>
            {/* add links to your project */}
            <Link href={projects.link} className='flex space-x-1'>
               <h2 className="underline">{projects.title}</h2>
               <ArrowTopRightIcon/>
               
            </Link>
            <p className=" text-zinc-500 ">
                  {projects.description.slice(0,100)}...
            </p>


         </div>
        
      ))}

    </div>

    {/* <Link href={`/`} className="flex space-x-1">
    <h1>More projects</h1>
    <ArrowTopRightIcon/>

    </Link> */}


    </div>
  
  )
}
export default Projects