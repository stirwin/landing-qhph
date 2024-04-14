import React from 'react'
import Image from "next/image";
import { FEATURES } from "@/constants";
import { TreePalm } from 'lucide-react';
export default function Features() {
  return (
    <div>  
        {/*SFEATURES */}
    <section>
      <div
        className="flex flex-col justify-center items-center overflow-hidden 
      bg-feature-bg bg-center bg-no-repeat py-24"
      >
        <div className="flex mx-auto max-w-[1440px]  px-6 lg:px-20 3xl:px-0 relative w-full justify-end">
          <div className="flex flex-1 lg:min-h-[900px]">
            <Image
              src="/resources/phone.png"
              alt="phone"
              width={440}
              height={100}
              className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
            />
          </div>

          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <div className="relative ">
              <Image
                src="/resources/camp.svg"
                alt="Guide"
                width={40}
                height={50}
                
              />

              <h2 className="font-bold lg:font-semibold text-4xl"> Our Features</h2>
            </div>

            <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20'>
              {FEATURES.map((feature)=>(
                <FeatureItem
                key={feature.title}    
                title={feature.title}
                variant={feature.variant}
                description={feature.description}
                

                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section></div>
  )
}

type FeatureItem={
    title: string;
    variant: string;
    description:string;
}

const FeatureItem=({title, variant, description}:FeatureItem)=>{
    return(
        <li className='flex w-full flex-1 flex-col items-start'>
            <div className='rounded-full p-4  bg-green-500'>
               <TreePalm className='text-white'
               strokeWidth={1}/>
            </div>
            <h2 className='font-bold mt-5 capitalize'>{title}</h2>
                <p className=' text-gray-500 '> {description}</p>
          
        </li>
    )
}