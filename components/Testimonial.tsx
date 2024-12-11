"use client"
import { TESTIMONIAL } from "@/constant";
import React from "react";
import Slider from "react-slick";
import { RiDoubleQuotesR } from "react-icons/ri";
import Image from "next/image";

const Testimonial = () => {

    let settings = {
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

  return (
    <section className="padding-container max-container pt-16 bg-slate-10 realative">
      <h3 className="bold-32 text-center">Testimonios</h3>
      <p className="text-center max-lg m-auto text-gray-30 py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda
        in ut praesentium doloremque eos fugit beatae obcaecati amet voluptate
        sit amet consectetur adipisicing elit.
      </p>
      <Slider {...settings}>
        {
            TESTIMONIAL.map((testimonial) => (
                <TestimonialItem
                key={testimonial.title}
                title={testimonial.title}
                des={testimonial.des}
                profession={testimonial.profesion} 
                URL={testimonial.URL}/>
            ))
        }
      </Slider>
    </section>
  );
};

type TestimonialItem = {
    des: string;
    title: string;
    URL: string;
    profession: string;
}


const TestimonialItem = ({ title, profession, URL, des }: TestimonialItem) => {
    return (
        <div className="mx-4 my-12 relative px-8 py-12 rounded-md bg-white z-10">
            <span className="text-slate-10 text-9xl absolute -top-4 right-4 -z-10">
             <RiDoubleQuotesR/>
             </span>
            <p className="text-gray-50 text-center">{des}</p>
            <div className="flexCenter gap-4 mt-8">
            <Image
            src={URL}
            alt='user'
            height={55}
            width={55}
            className='rounded-full'
            />
            </div>
            <div className="medium-14">{title}</div>
            <div className="text-gray-20 regular-14">{profession}</div>

        </div>
    )
}

export default Testimonial;
