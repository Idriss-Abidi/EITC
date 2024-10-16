import aboutGif from "../assets/gifs/about.gif"
import  {HERO_CONTENT}  from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="ABOUT" className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-50}} transition={{duration:0.5}} className="my-20 text-center text-4xl text-neon">ABOUT <span className="text-neutral-500 text-neon">US</span></motion.h1>
      <div className="flex flex-wrap">
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
        <img className="rounded-2xl shadow-lg shadow-indigo-500/90" src={aboutGif} alt="about" />
        </div>
      </motion.div>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5}} className="w-full lg:w-1/2">
         <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl text-2xl py-6 text-neon">{HERO_CONTENT}</p>
         </div>
        </motion.div>
      </div>
    </div>
  )
}
export default About
