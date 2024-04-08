import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import { X } from "lucide-react";
import { Map } from "lucide-react";

interface CampProps {
  backgrundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgrundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[800px] ${backgrundImage} bg-cover bg-no-repeat rounded-3xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 *:lg:px-20 lg:py-10 ">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Map className="text-white" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-white "> {subtitle}</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <span className="flex -space-x-4">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  alt="Shadcn"
                  width={40}
                  height={40}
                  src="/resources/person-1.png"
                />
              ))}
          </span>
          <p className="font-bold text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

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

      {/*SECTION CAMP*/}
      <section
        className=" 2xl:mx-auto 2xl:max-w-[1440px] relative flex flex-col
       py-10 lg:mb-10 lg:py-20 xl:mb-20 "
      >
        <div
          className="hide-scrollbar flex h-[340px] w-full items-start 
          justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
        >
          <CampSite
            backgrundImage="bg-camp-1"
            title="Lorem, ipsum dolor."
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
            peopleJoined="50+ joined"
          />
          <CampSite
            backgrundImage="bg-camp-1"
            title="Lorem, ipsum dolor."
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
            peopleJoined="30+ joined"
          />
        </div>

        <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6 transition-all">
          <div className="bg-green-500 p-8 lg:max-w-[500px] rounded-3xl relative w-full overflow-hidden">
            <h2 className="capitalize text-white"><strong>Lorem ipsum dolor sit</strong> amet consectetur adipisicing.</h2>
            <p className="text-white text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo, veniam iusto ea modi ab placeat tempore quidem dolorem nihil!</p>
            <Image
              src="/resources/quote.svg"
              alt="Camp"
              width={40}
              height={40}
              className="absolute right-6 bottom-3 w-[140px]"
            />
          </div>

        </div>
      </section>

      {/*SECTION GUIDE*/}
      <section className="flex flex-col justify-center items-center"> 
        <div className=" px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-11">
          <Image
            src="/resources/camp.svg"
            alt="Guide"
            width={40}
            height={50}
            
          />
          <p className="uppercase font-medium text-primary mb-3">Lorem ipsum dolor sit amet.</p>
          <div className="flex flex-wrap justify-between gap-5">
                  <h2 className="font-bold text-4xl">Lorem, ipsum dolor.</h2>
                  <p className=" xl:max-w-[520px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus quam nostrum iure labore numquam iste blanditiis, voluptates odit repellat laborum! Fugit tempore, praesentium voluptatum ea suscipit quaerat saepe nisi!</p>
        </div>
        </div>
        
        <div className="flex justify-center items-center  mx-auto max-w-[1440px] relative w-full ">
          <Image
            src="/resources/boat.png"
            alt="boat"
            width={1440}
            height={580}
            className="w-full rounded-3xl"
          />

          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-sm  lg:left-[5%] lg:transition-all">
                 
                 <Image
                   src="/resources/meter.svg"
                   alt="meter"
                   width={16}
                   height={158}
                   className="h-full w-auto"
                 />
                 
                  <div className=" flex flex-col items-center justify-between">
                    <div className="flex w-full flex-col">
                      <div className="flex items-center justify-between w-full">
                        <p className="text-gray-400 font-semibold">Destination</p>
                        <p className="font-bold text-primary">48 min</p>
                      </div>
                      <p className="font-bold">chikoko cua</p>

                    </div>

                    <div className="flex w-full flex-col">
                      
                        <p className="text-gray-400 font-semibold">Destination</p>
                        <p className="font-bold ">Arjona</p>
                    </div>
                  </div>
          </div>
        </div>
        
      </section>  


      {/*SFEATURES */}
      <section>
        <div className="flex flex-col justify-center items-center overflow-hidden 
        bg-feature-bg bg-center bg-no-repeat py-24"> 
            <div className="mx-auto max-w-[1440px]  px-6 lg:px-20 3xl:px-0 relative w-full justify-end">
              <div>
                <Image
                src="/resources/phone.png"
                alt="phone"
                width={440}
                height={100}
                className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
                />
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
