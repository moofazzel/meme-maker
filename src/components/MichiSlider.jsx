// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

const MichiSlider = ({children}) => {
  return (
    <Swiper
    slidesPerView={4}
      spaceBetween={20}
      navigation={true}
      modules={[Navigation]}
    >
      {children}
  
    </Swiper>
  );
}

export default MichiSlider;

