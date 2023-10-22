import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {

    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)",
          pathWidth: 5
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)",
          pathWidth: 5
        }
      };

      const title = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        }
      };

  return (
      <div className="w-full h-screen flex justify-center items-center">
              <div className="w-full flex flex-col items-center justify-center">
                <motion.h1 className="text-5xl text-red font-display" variants={title} initial="hidden" animate="visible" transition={{default: { duration: 2, ease: "easeInOut", delay: 5 }}}>The Art of</motion.h1>
              <motion.svg className="w-2/4" id="Groupe_2" data-name="Groupe 2" xmlns="http://www.w3.org/2000/svg" width="802.182" height="293.569" viewBox="0 0 802.182 293.569">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Rectangle_1" data-name="Rectangle 1" width="802.182" height="293.569" fill="none"/>
                    </clipPath>
                </defs>
            <g id="Groupe_1" data-name="Groupe 1" clip-path="url(#clip-path)">
                <motion.path variants={icon} initial="hidden" animate="visible"transition={{
            default: { duration: 4, ease: "easeInOut" },
            fill: { duration: 4, ease: [1, 0, 0.8, 1] }
            }} id="Tracé_1" data-name="Tracé 1" d="M243.392,108.013Q189.924,156.3,125.559,206.7q15.767,19.485,32.7,44.757l-34.916,28.1q-31.478-52.524-89.861-118.6l32.98-22.308a424.838,424.838,0,0,1,36.345,40.239Q153,140.064,189.882,108.013H3.087L10.83,71.586h240.3Z" fill="none" stroke="#de1a2a" stroke-width="5"/>

                <motion.path variants={icon} initial="hidden" animate="visible"transition={{
            default: { duration: 4, ease: "easeInOut" },
            fill: { duration: 4, ease: [1, 0, 0.8, 1] }
            }} id="Tracé_2" data-name="Tracé 2" d="M515.743,109q-47.53,65.515-100.118,102.363T267.117,265.722L258.568,226.9Q337,216.59,387.686,186.373t96.862-96.008ZM386.7,97.706l-31.948,30.073a432.338,432.338,0,0,0-57.2-54.357l28.521-29.227Q355.765,64.526,386.7,97.706Z" fill="none" stroke="#de1a2a" stroke-width="5"/>
                
                <motion.path variants={icon} initial="hidden" animate="visible"transition={{
            default: { duration: 4, ease: "easeInOut" },
            fill: { duration: 4, ease: [1, 0, 0.8, 1] }
            }} id="Tracé_3" data-name="Tracé 3" d="M778.343,99.4q-8.41,35.58-18.229,69.818t-17.747,57.253q-7.929,23.015-13.512,30.355a55.08,55.08,0,0,1-12.691,12.214,53.922,53.922,0,0,1-16.4,7.412q-9.294,2.541-29.2,2.541-9.6,0-21-.847L647.027,239.6q37.458,1.132,42.241-.776a19.2,19.2,0,0,0,7.936-5.789q3.155-3.882,12.9-32.473t19.286-64.172H673.06q-11.714,44.475-49.273,86.338a306.709,306.709,0,0,1-86.649,67.559l-20.852-32.756a257.69,257.69,0,0,0,74.024-52.664q31.925-32.614,41.945-68.477H557.708L565.571,99.4h76.1L656.5,29.653h40.381L682.053,99.4ZM765.457,61.752,739.44,73.894Q734.824,54.41,725.4,27.019l22.047-10.73A380.381,380.381,0,0,1,765.457,61.752Zm33.568-15.107L773.7,59.493a352.437,352.437,0,0,0-17-44.9L779.294,3.3Q788.217,19.115,799.025,46.645Z" fill="none" stroke="#de1a2a" stroke-width="5"/>
            </g>
            </motion.svg>

            <Link to="/slamdunk">
                <motion.button variants={title} initial="hidden" animate="visible" transition={{default: { duration: 2, ease: "easeInOut", delay: 6 }}} className="text-red text-2xl py-2 px-10 rounded-full border-4 border-red mt-14 font-display">Start</motion.button>
            </Link>

            </div>
    </div>
    
  );
}

export default Home;
