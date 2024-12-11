import { PACkAGES } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSearchLine, RiTimeLine } from "react-icons/ri";

const Packages = () => {
  return (
    <section className="max-container padding-container pt-16 bg-slate-10">
      <h3 className="bold-32 text-center">Nuestros Paquetes</h3>
      <p className="text-center max-lg m-auto text-gray-30 py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda
        in ut praesentium doloremque eos fugit beatae obcaecati amet voluptate
        sit amet consectetur adipisicing elit.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12">
        {PACkAGES.map((card) => (
          <PackageItem
            key={card.title}
            title={card.title}
            URL={card.URL}
            price={card.price}
            des={card.des}
            duration={card.duration}
          />
        ))}
      </div>
    </section>
  );
};

type PackageItem = {
  title: string;
  price: string;
  URL: string;
  des: string;
  duration: string;
};

const PackageItem = ({ title, price, URL, des, duration }: PackageItem) => {
  return (
    <div className="overflow-hidden rouded-tl-xl rounded-tr-xl border border-slate-200 group">
      <div className="overflow-hidden realative">
        <Image
          src={URL}
          alt="img"
          height={600}
          width={510}
          className="group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
        />
        <Link
          href="/"
          className="absolute top-1/2 left-1/2 h-14 w-14 bg-white flexCenter rounded-full
            -trasnslate-x-1/2  -trasnslate-y-1/2  scale-0 group-hover:scale-100 transition-all duration-500"
        >
          <RiSearchLine />
        </Link>
      </div>
      <div className="p-4 bg-white">
        <div className="capitalize medium-18 flexBetween">{title} <span className="text-green-50">{price}</span></div> 
        
        <p className='text-gray-50 my-3 regular-14 border-b border-gray-200 pb-3'>{des}</p>
        <div className="flexBetween">
          <p className='flexStart gap-2 text-gray-50'>
            <RiTimeLine /> <span className="medium-14">{duration}</span>{" "}
          </p>
          <Link
            href="/"
            className="medium-14 px-4 py-2 rounded-md border bg-black text-white"
          >
            <span>Ordena Ahora</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
