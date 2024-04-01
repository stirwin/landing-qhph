import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Content() {
  return (
    <div>
      <section
        className=" mx-auto max-w-[1440px] flex flex-col gap-20 py-10
        pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-50"
      >
        <div className=" absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60" />
      
       {/*LEFT*/}
   <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
    <Image
      src="resources/camp.svg"
      alt="Camp"
      width={40}
      height={40}
      className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
    />
    <h1 className=" font-bold md:text-4xl text-2xl transition-all">Lorem ipsum dolor sit.</h1>
    <p className="text-gray-600 mt-6  xl:max-w-[520px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, maiores ea iste sapiente exercitationem pariatur corporis sequi repellat voluptates unde?</p>

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
