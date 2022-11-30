import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { ReviewCard } from "../../components/ReviewCard";
import { peopleData } from "../../utility/data";
import ReviewImage from "../../assets/images/review.png"

export const ReviewSection = () => {
  return (
    <div className="py-20">
      <div className="font-Jakarta font-bold md:text-5xl text-3xl text-center mb-20 md:block hidden">
        What People Say
      </div>
      <div className="md:grid grid-cols-3 gap-8 px-10 hidden">
        <div className="pt-6">
          {peopleData.map((data, index) => {
            if (index % 3 === 0) return <ReviewCard data={data} key={index} />;
            else return null;
          })}
        </div>
        <div>
          {peopleData.map((data, index) => {
            if (index % 3 === 1) return <ReviewCard data={data} key={index} />;
            else return null;
          })}
        </div>
        <div>
          {peopleData.map((data, index) => {
            if (index % 3 === 2) return <ReviewCard data={data} key={index} />;
            else return null;
          })}
        </div>
      </div>
      <div className="md:hidden block flex justify-center mb-10">
        <img width="300" src={ReviewImage} alt="XIABOT REVIEWS" />
      </div>
      <div className="md:hidden block">
        <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
          {peopleData.map((data, index) => (
            <SwiperSlide key={index}>
              <ReviewCard data={data} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
