import { Reveal } from "./Reveal";

function Web() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-row items-center justify-center">
                <Reveal>
                    <h1 className="text-7xl text-green font-display pb-5">Web<br></br>Development</h1>
                </Reveal>
            </div>
    </div>
  );
}

export default Web;
