import { Reveal } from "./Reveal";
import slamDunk from "../../public/slam-dunk-bg.png";
import { motion } from "framer-motion";
import ImageMasonry from "./Masonry";
import SlamDunkJson from "../assets/JSON/slamdunk.json";
import Typewriter from 'typewriter-effect';

// interface Data {
//   img: string;
//   title: number;
// }

function SlamDunk() {

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
              <div className="w-full flex flex-row items-center justify-center">
                <div className="w-6/12"></div>
                  <div className="w-4/12 flex flex-col">
                    <Reveal>
                        <h1 className="text-8xl text-red font-display pb-5 relative">Slam Dunk</h1>
                    </Reveal>
                    <Reveal>
                      <p className="font-mont font-regular text-lg">Hanamichi Sakuragi is a delinquent and the leader of a gang. He is very unpopular with girls, having been rejected an astonishing fifty times. In his first year at Shohoku High School, Sakuragi meets Haruko Akagi, the girl of his dreams, and is overjoyed when she is not repulsed or scared of him like all the other girls he has asked out. Haruko, recognizing Sakuragi's athleticism, introduces him to the Shohoku basketball team. Sakuragi is reluctant to join the team at first, as he has no prior experience in sports and thinks that basketball is a game for losers because his fiftieth rejection was in favor of a basketball player. Despite his extreme immaturity and fiery temper, he proves to be a natural athlete and joins the team, mainly in the hopes of impressing and getting closer to Haruko. </p>
                      
                    </Reveal>
                  </div>
              </div>
              <motion.div className="w-full absolute -z-50 h-full truncate" initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: 0.8 }}>
                <img className="h-full" src={slamDunk}></img>
              </motion.div>
      </div>
      <Reveal>
      <div className="text-6xl m-auto w-full flex justify-center mt-14 p-5 font-display text-red">
              <Typewriter
          options={{
            strings: [`“I love it very much! This time I am definitely not lying.”`, 'Manga by Takehiko Inoue', '1990-1996', '#10 Sakuragi Hanamichi — The King of Rebound'],
            autoStart: true,
            loop: true,
          }}
            />
      </div>
      </Reveal>
      <div>
        <ImageMasonry jsonData={SlamDunkJson}/>
      </div>
    </div>
    
  );
}

export default SlamDunk;
