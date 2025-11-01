import React from "react";
import Topic from "../Topic/Topic";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa6";


const Testimonials = () => {
  const renderReviews = reviews.map((review) => {
    return (
      <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
            <img src={review.image} className="w-full h-full " />
          </div>
          <div>
            <h5 className="text-xl font-bold font-[poppins]">{review.name}</h5>
            <p className="text-zinc-600 font-[poppins]">{review.profession}</p>
            <span className="flex text-yellow-400 text-xl mt-3 gap-1">
              {Array.from({length:review.rating},(_, index)=>(
           <FaStar />

              ))}
              </span>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-zinc-600 font-[poppins]">{review.description}</p>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className="2xl:container mx-auto py-20 relative z-0 overflow-hidden ">
        <Topic first="Customers" second="Saying" />

        <div className="flex justify-end p-5 mt-10 ">
          <button className="custom-prev text-3xl text-zinc-600 hover:text-orange-500 cursor-pointer  ">
            <FaRegArrowAltCircleLeft />
          </button>
          <button className="custom-next text-3xl text-zinc-600 hover:text-orange-500 cursor-pointer ">
            <FaRegArrowAltCircleRight />
          </button>
        </div>

        <div className="w-[90%] mx-auto">
          <Swiper 
          navigation={{
            nextEl:".custom-next",
            prevEl:".custom-prev"
          }}
          loop={true}
          breakpoints={{
            640:{slidesPerView:1,spaceBetween:20},
            768:{slidesPerView:2,spaceBetween:20},
            1024:{slidesPerView:3,spaceBetween:20},
          }}
           modules={[Navigation]} className="mySwiper">
            {renderReviews}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

const reviews = [
  {
    id: 1,
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/reviews/img3.jpg",
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: "4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sit est error temporibus repellendus pariatur unde ratione ullam iure officiis?",
  },
  {
    id: 2,
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/reviews/img1.jpg",
    name: "David Woods",
    profession: "Chef",
    rating: "3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sit est error temporibus repellendus pariatur unde ratione ullam iure officiis?",
  },
  {
    id: 3,
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/reviews/img2.jpg",
    name: "John Wick",
    profession: "Agent",
    rating: "5",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sit est error temporibus repellendus pariatur unde ratione ullam iure officiis?",
  },
  {
    id: 4,
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/reviews/WhatsApp%20Image%202025-11-01%20at%207.40.26%20PM.jpeg",
    name: "Charles wins",
    profession: "Doctor",
    rating: "3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sit est error temporibus repellendus pariatur unde ratione ullam iure officiis?",
  },
  {
    id: 5,
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/reviews/WhatsApp%20Image%202025-11-01%20at%207.45.25%20PM.jpeg",
    name: "wintson miller",
    profession: "Fitnes Coach",
    rating: "4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sit est error temporibus repellendus pariatur unde ratione ullam iure officiis?",
  },
];
