import React from "react";
import NavBar from "../../components/NavBar";
import ImgBg from "../../../assets/blue-sofa-removebg-preview.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex ">
        <div className=" w-1/2 h-screen">
          <h1 className="text-accent text-7xl font-sans font-bold ml-20 mt-14">
            Modern <br /> Furniture
          </h1>
          <h4 className="text-accent text-lg font-sans font-semibold ml-20 mt-10">
            we combine interior and exterior design<br/> service and often provide
            them as a single <br/> solution
          </h4>
          <div className="flex gap-5 ml-20 mt-10">
            <button className="bg-[#94A8BF] p-4 rounded-lg">Shop Now </button>
            <button className="bg-secondary p-4 rounded-lg">Start Now</button>
          </div>
        </div>
        <div className=" w-1/2 h-screen grid overflow-hidden">
          <div className="bg-secondary h-2/3 w-2/3 rounded-full relative top-[3px] left-[300px]">
          </div>
        </div>
      </div>
      <div className="absolute flex-col justify-center items-center top-48 right-72  h-[430px] w-[770px]  ">
              <Image
                src={ImgBg}
                alt=""
                className="w-full h-full object-cover "
              />
              <div className="w-10/12 h-5 bg-secondary rounded-xl"></div>
            </div>
    </div>
  );
};

export default page;
