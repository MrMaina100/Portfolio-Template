import Link from "next/link"
import {BiLogoGmail} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'

const Connect = () => {
  return (
    <div className="mt-20 mb-5">
      <hr  className=" border-zinc-500 mb-4 "/>
      <div className=" flex flex-col space-y-3 items-center justify-center ">

         <p>I too, am Social</p>

         <div className="flex flex-row space-x-5 items-center pb-5">

            {/* here you can choose which links to your social you would like to show... i used react-icons ..you can go over to there page and choose a vareity of icons from there .You can also customize how you would like to display them  */}
            <Link href='/'>
               <BiLogoGmail/>

            </Link>

            <Link href='/'>
               <BiLogoLinkedin/>

            </Link>

            <Link href='/'>
               <AiFillGithub/>

            
            </Link>

            <Link href='/'>
               <FaXTwitter/>

            
            </Link>

         </div>

      </div>


    </div>
  )
}
export default Connect