import { Reveal } from "./Reveal";
import SlamDunk from "../assets/slam-dunk-bg.png";
import { motion } from "framer-motion";

function Home() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full flex flex-row items-center justify-center">
              <div className="w-6/12"></div>
                <div className="w-4/12 flex flex-col">
                  <Reveal>
                      <motion.h1   whileHover={{backgroundColor: '#ec3137', color: '#ebebeb', transition: { duration: 0.5 },
  }} className="text-8xl text-red font-display pb-5 relative">Slam Dunk</motion.h1>
                  </Reveal>
                  <Reveal>
                    <p className="font-mont font-regular text-lg">Hanamichi Sakuragi is a delinquent and the leader of a gang. He is very unpopular with girls, having been rejected an astonishing fifty times. In his first year at Shohoku High School, Sakuragi meets Haruko Akagi, the girl of his dreams, and is overjoyed when she is not repulsed or scared of him like all the other girls he has asked out. Haruko, recognizing Sakuragi's athleticism, introduces him to the Shohoku basketball team. Sakuragi is reluctant to join the team at first, as he has no prior experience in sports and thinks that basketball is a game for losers because his fiftieth rejection was in favor of a basketball player. Despite his extreme immaturity and fiery temper, he proves to be a natural athlete and joins the team, mainly in the hopes of impressing and getting closer to Haruko. </p>
                    
                  </Reveal>
                </div>
            </div>
            <motion.div className="w-full absolute -z-50 h-full truncate" initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}
              transition={{ duration: 2, delay: 1.5 }}>
              <img className="h-full" src={SlamDunk}></img>
            </motion.div>
    </div>
  );
}

export default Home;
