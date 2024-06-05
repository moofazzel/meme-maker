import { SwiperSlide } from "swiper/react";
import MichiSlider from "./MichiSlider";
import catPhoto from '../assets/images/first-meme.png'

const CatsSlider = () => {

    const catsList = [
        {
            name : "brown meme",
            image : catPhoto
        },
        
        {
            name : "mofazzel",
            image : catPhoto
        },
        {
            name : "rony",
            image : catPhoto
        },
        {
            name : "jui",
            image : catPhoto
        },
        {
            name : "gazi",
            image : catPhoto
        },

    ]

  return (
    <MichiSlider>
      {
        catsList.map(cat => <SwiperSlide> <div>
            <h6> {cat?.name} </h6>
            <img src={cat?.image} alt="" />
            </div> </SwiperSlide> )
      }
    </MichiSlider>
  );
};

export default CatsSlider;
