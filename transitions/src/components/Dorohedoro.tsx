import { Reveal } from "./Reveal";
import dorohedoro from  "../../public/dorohedoro-bg.png";
import { motion } from "framer-motion";
import ImageMasonry from "./Masonry";
import DorohedoroJson from "../assets/JSON/dorohedoro.json";
import Typewriter from 'typewriter-effect';

function Dorohedoro() {


  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
              <div className="w-full flex flex-row items-center justify-center">
                <div className="w-6/12"></div>
                  <div className="w-4/12 flex flex-col">
                    <Reveal>
                        <h1 className="text-8xl text-red font-display pb-5 relative">Dorohedoro</h1>
                    </Reveal>
                    <Reveal>
                      <p className="font-mont font-regular text-lg">A man named Caiman is searching for a sorcerer, his erased memories and reptilian head a result of their magic. Assisted by his friend Nikaido, a restaurant chef who runs The Hungry Bug, Caiman wanders Hole in search of his curser, hoping to kill them and dispell their magic. Caiman's only lead is the full-size man who lives down his throat: by placing a sorcerer's head inside Caiman's mouth, the man's head will slide up Caiman's throat and verify if they are responsible. Getting a job at a community hospital for magic attack victims, Caiman works with Drs. Vaux and Kasukabe to reach the sorcerer's world and uncover his past. </p>
                      
                    </Reveal>
                  </div>
              </div>
              <motion.div className="w-full absolute -z-50 h-full truncate" initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: 0.8 }}>
                <img className="h-full" src={dorohedoro}></img>
              </motion.div>
      </div>
      <div className="text-6xl m-auto w-full flex justify-center mt-14 p-5 font-display text-red">
      <Typewriter
          options={{
            strings: [`“I'm looking for a man with a lizard head..."`, 'Manga by Q Hayashida', '2000-2017', 'Kaiman vs Shin'],
            autoStart: true,
            loop: true,
          }}
            />
      </div>
      <div>
        <ImageMasonry jsonData={DorohedoroJson}/>
      </div>
    </div>
    
  );
}

export default Dorohedoro;
