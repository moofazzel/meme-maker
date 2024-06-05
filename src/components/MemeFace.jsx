import meme1 from "../assets/images/first-meme.png"
import { Button } from "./Button";
import Download from "./Download";
import Random from "./Random";
import Reset from "./Reset";

export const MemeFace = () => {
  return <>
    <div className="mr-10 pr-6 space-y-5 flex flex-col items-center">
      <img className=" rounded-md border-8 border-[#764824] " src={meme1} alt="" />

      <Random/>
      <Download/>
      <Reset/>

      
    </div>
  </>;
};
