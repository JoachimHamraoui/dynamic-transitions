import { Reveal } from "./Reveal";
import akira from  "../../public/akira-bg.png";
import { motion } from "framer-motion";
import ImageMasonry from "./Masonry";
import AkiraJson from "../assets/JSON/akira.json";
import Typewriter from 'typewriter-effect';

function Akira() {


  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
              <div className="w-full flex flex-row items-center justify-center">
                <div className="w-6/12"></div>
                  <div className="w-4/12 flex flex-col">
                    <Reveal>
                        <h1 className="text-8xl text-red font-display pb-5 relative">Akira</h1>
                    </Reveal>
                    <Reveal>
                      <p className="font-mont font-regular text-lg">Set in a post-apocalyptic and futuristic "Neo-Tokyo", more than three decades after a mysterious explosion destroyed the city, the story centers on teenage biker gang leader Shotaro Kaneda, militant revolutionary Kei, a trio of Espers, and Neo-Tokyo military leader Colonel Shikishima, who attempt to prevent Tetsuo Shima, Kaneda's mentally unbalanced childhood friend, from using his unstable and destructive telekinetic abilities to ravage the city and awaken a mysterious entity with powerful psychic abilities named "Akira".</p>
                      
                    </Reveal>
                  </div>
              </div>
              <motion.div className="w-full absolute -z-50 h-full truncate" initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: 0.8 }}>
                <img className="h-full" src={akira}></img>
              </motion.div>
      </div>
      <div className="text-6xl h-60 m-auto w-8/12 flex justify-center mt-14 py-5 font-display text-red">
      <Typewriter
          options={{
            strings: [`“Go away! The New Neo Tokyo can take care of itself”`, 'Manga by Katsuhiro Otomo', '1982-1990', 'A new war for Neo Tokyo'],
            autoStart: true,
            loop: true,
          }}
            />
      </div>
      <div>
        <ImageMasonry jsonData={AkiraJson}/>
      </div>
    </div>
    
  );
}

export default Akira;
