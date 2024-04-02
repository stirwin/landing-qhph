import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import { X } from 'lucide-react';

export default function Content() {
  return (
    <div>
      <section
        className=" mx-auto max-w-[1440px] flex flex-col gap-20 py-10
        pb-32 md:gap-28 lg:py-20 xl:flex-row "
      >
         {/*Imagen*/}
        <div className=" absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60" />

        {/*LEFT*/}
        <div className="relative z-20 flex flex-1 flex-col ">
          <Image
            src="resources/camp.svg"
            alt="Camp"
            width={40}
            height={40}
            className="absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]"
          />
          <h1 className=" font-bold md:text-4xl text-2xl transition-all">
            Lorem ipsum dolor sit.
          </h1>
          <p className="text-gray-600 mt-6  xl:max-w-[520px]">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            maiores ea iste sapiente exercitationem pariatur corporis sequi
            repellat voluptates unde?
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Star key={index} className="h-5 w-5 text-primary" />
                ))}
            </div>
            <p className="font-bold lg:font-semibold ">
              198k
              <span className="font-normal ml-1">Events</span>
            </p>
          </div>

          <div className="flex w-full gap-3 sm:flex-row">
            <Button> Descargar</Button>
          </div>
        </div>
        {/*CARD*/}
        
        <div className="relative flex flex-1 items-start">
           <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-slate-900  border-2 px-6 py-6 ng-primary-foreground ">
            <div className="flex flex-col">
              <div className="flex justify-between items-center  ">
                <p className="text-slate-50">Location</p>
                <X className="h-4 w-4 text-slate-50" />
                </div>
                <p className=" text-slate-50 font-bold mb-9">Chiricoco</p>

                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="block text-slate-50 text-sm"> Distancia</p>
                    <p className="font-bold text-slate-50 "> 172.8 km</p>
                    
                  </div>
                  <div className="flex flex-col">
                    <p className="block text-slate-50 text-sm"> Distancia</p>
                    <p className="font-bold text-slate-50 "> 172.8 km</p>
                    
                  </div>
                </div>
               </div>
           </div>
        </div>

      </section>

      {/*TEXTO*/}
      <section>
        <section className=" flex flex-col items-center gap-8">
          <h1 className=" text-4xl font-bold">Lorem, ipsum dolor.</h1>

          <p className="text-2xl text-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </section>

        <div className="flex gap-6 py-6 justify-center">
          <Button variant="secondary">Leer mas</Button>
          <Button>Enroll now</Button>
        </div>
      </section>
    </div>
  );
}
