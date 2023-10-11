import { Reveal } from "./Reveal";
import DB from "../assets/db-bg.png";
import { motion } from "framer-motion";
import ImageMasonry from "./Masonry";
import DragonBallJson from "../assets/JSON/dragonball.json";
import Typewriter from 'typewriter-effect';

function DragonBall() {


  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
              <div className="w-full flex flex-row items-center justify-center">
                <div className="w-6/12"></div>
                  <div className="w-4/12 flex flex-col">
                    <Reveal>
                        <h1 className="text-8xl text-red font-display pb-5 relative">Dragon Ball</h1>
                    </Reveal>
                    <Reveal>
                      <p className="font-mont font-regular text-lg">The series begins with a young monkey-tailed boy named Goku befriending a teenage girl named Bulma. Together, they go on an adventure to find the seven mystical Dragon Balls (ドラゴンボール), which have the ability to summon the powerful dragon Shenron, who can grant whoever summons him their greatest desire.</p>
                      
                    </Reveal>
                  </div>
              </div>
              <motion.div className="w-full absolute -z-50 h-full truncate" initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: 0.8 }}>
                <img className="h-full" src={DB}></img>
              </motion.div>
      </div>
      <div className="text-6xl m-auto w-full flex justify-center mt-14 p-5 font-display text-red">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(`“Gohan, tell your mother I love her.”`).start()
            }}
          />
      </div>
      <div>
        <ImageMasonry jsonData={DragonBallJson}/>
      </div>
    </div>
    
  );
}

export default DragonBall;
