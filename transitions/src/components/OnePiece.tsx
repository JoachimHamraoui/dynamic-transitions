import { Reveal } from "./Reveal";
import OP from  "../../public/op-bg.png";
import { motion } from "framer-motion";
import ImageMasonry from "./Masonry";
import OnePieceJson from "../assets/JSON/onepiece.json";
import Typewriter from 'typewriter-effect';

function OnePiece() {


  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
              <div className="w-full flex flex-row items-center justify-center">
                <div className="w-6/12"></div>
                  <div className="w-4/12 flex flex-col">
                    <Reveal>
                        <h1 className="text-8xl text-red font-display pb-5 relative">One Piece</h1>
                    </Reveal>
                    <Reveal>
                      <p className="font-mont font-regular text-lg">The series focuses on Monkey D. Luffy—a young man made of rubber after unintentionally eating a Devil Fruit—who sets off on a journey from the East Blue Sea to find the deceased King of the Pirates Gol D. Roger's ultimate treasure known as the "One Piece", and take over his prior title.</p>
                      
                    </Reveal>
                  </div>
              </div>
              <motion.div className="w-full absolute -z-50 h-full truncate" initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: 0.8 }}>
                <img className="h-full" src={OP}></img>
              </motion.div>
      </div>
      <div className="text-6xl m-auto w-8/12 flex justify-center mt-14 py-5 font-display text-red">
      <Typewriter
          options={{
            strings: [`“Fools who don't respect the past are likely to repeat it"`, 'Manga by Eiichiro Oda', 'Ongoing on a weekly basis since 1997', 'Monkey D. Luffy'],
            autoStart: true,
            loop: true,
          }}
            />
      </div>
      <div>
        <ImageMasonry jsonData={OnePieceJson}/>
      </div>
    </div>
    
  );
}

export default OnePiece;
