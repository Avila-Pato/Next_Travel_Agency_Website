import React from 'react'
import Button from './Butoon'
import Link from 'next/link'
import Image from 'next/image'

import { CATEGORIES } from '@/constant'

const Hero = () => {
    return (
        <section className="relative bg-hero bg-cover bg-center bg-no-repeat 
        h-[100vh] w-full z-10 pb-12">
            <div  className="max-container padding-container relative top-28
             sm:top-28 z-10">
                <h1 className="bold-44 sm:bold-64 text-white capitalize 
                max-w-[36rem]"> Explora el mundo con nosotros!
                </h1>
                <p className="regular-16 mt-16 text-white lg:w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-8">
                <Button
                type="button"
                title="Travel Plan"
                icon="assets/send-plane.svg"
                variant="btn_white_rounded" 
                />
            </div>
            <h4 className="text-white my-4  bold-22">Explora los puntos de interes</h4>
                <ul className="flex flex-wrap gap-4">
                 {CATEGORIES.map((category) => (
                    <CategoryItem
                    key={category.title}        
                    title={category.title} 
                    icon={category.icon} 
                    /> 
                 ))
                 }
                </ul>
            </div>

        </section>
    )
}


type CategoryItem = {
    title: string;
    icon: string;
}
const CategoryItem = ({ title, icon }: CategoryItem) => {
    return (
        <Link href="/" className="bg-white flexCenter gap-2 px-4 py-2 cursor-pointer
        hover:-translate-y-[2px] transition duration-500 rounded-md">
            <Image src={icon} alt="icon"
            height={22} width={22} 
            className="regular-28" />
            <span className="capitalize regular-16">{title}</span>
        </Link>
    )
}


export default Hero