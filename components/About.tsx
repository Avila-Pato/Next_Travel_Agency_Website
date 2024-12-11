import { ABOUT } from "@/constant";
import React from "react";
import Image from 'next/image'

const About = () => {
  return (
    <section className="max-container padding-container py-24">
      <div className="flex flex-col gap-8 lg:flex-row pb-24">
        {/* parte izquierda */}
        <div className="flex flex-1 flex-col items-start jusstify-center">
            <h1 className='bold-52 capitalize pb-4'>Unete y explora el mundo entero</h1>
            <p className="text-gray-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <br />
            <p className="text-gray-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className='flex flex-wrap mt-8'>
                {ABOUT.map((about) => (
                   <AboutItem
                   key={about.title}
                   title={about.title}
                   icon={about.icon} />
                ))}
            </div>
        </div>
        {/* Parte derecha img*/}
        <div className='flex flex-1 gap-4 lg:gap-8'>
        <div className=''>
        <Image 
        src="/assets/about1.jpg"
        alt='about'
        height={444}
        width={333}
        className='w-auto rounded-lg-border border-gray-10 mb-12
        '/>
        </div>
            
        <div className=''>
        <Image 
        src="/assets/about2.jpg"
        alt='about'
        height={444}
        width={333}
        className='w-auto rounded-lg-border border-gray-10 mb-12
        '/>
        </div>
      </div>     
      </div>
    </section>
  );
};

type AboutItem = {   
    title: string;
    icon: string;
}

const AboutItem = ({ title, icon}: AboutItem) => {
    return (
        <div className='w-1/2 flex gap-2 mb-4'>
            <Image src={icon} alt={icon} height={20} width={20} />
            <p className='regilar-14'>{title}</p>
        </div>
    )
}


export default About;
