import { motion } from "framer-motion";

const Logo = () => (
  <motion.div 
  initial={{scale:0,opacity:0}}
  animate={{
    scale: 1,
    opacity:1,
  }}
  drag="x"
  transition={{duration:0.5}} 
  dragConstraints={{left:0,right:0}} 
  className="relative ">
    <h1 className="text-xl sm:text-2xl md:text-4xl cursor-pointer whitespace-nowrap font-display drop-shadow-lg brightness-110 italic  md:-rotate-2 -top-1 relative   font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-600 via-fuchsia-600 to-pink-400 ">
      Klass
    </h1>
    <h1 className="text-xl sm:text-2xl md:text-4xl whitespace-nowrap absolute top-0  font-display italic -rotate-2 blur-2xl  font-bold   bg-clip-text bg-gradient-to-r text-transparent from-violet-500 via-fuchsia-600 to-pink-400 ">
      Klass 
    </h1>
  </motion.div>
);

export default Logo;
