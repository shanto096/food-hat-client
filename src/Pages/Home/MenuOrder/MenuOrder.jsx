import CategoryHeader from "../../../Component/CategoryHeader/CategoryHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/Slider/slide1.jpg";
import slider2 from "../../../assets/Slider/slide2.jpg";
import slider3 from "../../../assets/Slider/slide3.jpg";
import slider5 from "../../../assets/Slider/slide5.jpg";

const MenuOrder = () => {
  return (
    <div>
      <CategoryHeader
        subHeader={"From 11:00am to 10:00pm"}
        header={"ORDER ONLINE"}
      ></CategoryHeader>

      <div className="my-10">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
             <img  className="rounded-md" src={slider1} alt="" />
             
        </SwiperSlide>
        <SwiperSlide>
             <img  className="rounded-md" src={slider2} alt="" />
             
        </SwiperSlide>
        <SwiperSlide>
             <img  className="rounded-md" src={slider3} alt="" />
             
        </SwiperSlide>
        
        <SwiperSlide>
             <img  className="rounded-md" src={slider5} alt="" />
             
        </SwiperSlide>
        <SwiperSlide>
             <img  className="rounded-md" src={slider5} alt="" />
             
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  );
};

export default MenuOrder;
