import General from "@/components/General"
import Projects from "@/components/Projects"
import WorkExperience from "@/components/WorkExperience"
import Connect from "@/components/Connect"
const page = () => {
  return (
    <div className="container mx-auto max-w-3xl  mt-20 px-8 animate-fade-in">
      <General/>
      <Projects/>
      <WorkExperience/>
      <Connect/>
    </div>
  )
}
export default page