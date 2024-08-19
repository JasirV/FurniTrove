import React from "react";
import NavBar from "../../components/NavBar";
import ImgBg from "../../../assets/blue-sofa-removebg-preview.png";
import Image from "next/image";
import Arrow from '../../../assets/Arrow.png'
import Chair1 from '../../../assets/chair1.png'
import Chair2 from '../../../assets/cahir2.png'
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex ">
        <div className=" w-1/2 h-screen">
          <h1 className="text-textcss text-7xl font-sans font-bold ml-20 mt-14">
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
                className="w-full h-full object-cover"
              />
              <div className="w-10/12 h-5 bg-secondary rounded-xl absolute top-96"></div>
            </div>
            <div className="flex justify-around mt-5 mb-24">
              <div>
                <Image src={Arrow} alt="" className=" w-40"/>
                </div>
              <div>
                <h1 className="text-accent font-semibold font-sans text-4xl">Hot Deals For You</h1>
              </div>
              <div>
              <Image src={Arrow} alt="" className="rotate-180 w-40"/>
              </div>
            </div>

            <div className="flex justify-center mt-12 mb-12">
              <div className="p-10 flex flex-col justify-between gap-3 bg-seBg">
              <LiaShippingFastSolid size={65} className="text-textcss"/>
              <h1 className="text-textcss text-2xl font-semibold font-sans">Free Shopping</h1>
              <p className="text-textcss text-sm font-light font-serif w-1/2">we combine interior and
              exterior design service</p>
              </div>
              <div className="p-10 flex flex-col justify-between bg-seBg">
              <GiTakeMyMoney size={65} className="text-textcss"/>
              <h1 className="text-textcss text-2xl font-semibold font-sans">Free Shopping</h1>
              <p className="text-textcss text-sm font-light font-serif w-1/2">we combine interior and
              exterior design service</p>
              </div>
              <div className="p-10 flex flex-col justify-between bg-seBg"> 
              <TiMessages size={65} className="text-textcss"/>
              <h1 className="text-textcss text-2xl font-semibold font-sans">Free Shopping</h1>
              <p className="text-textcss text-sm font-light font-serif w-1/2">we combine interior and
              exterior design service</p>
              </div>
            </div>

            <div className="flex mt-10 mb-56 justify-center">
              <h1 className="text-accent text-4xl font-semibold font-sans">This Week Featured Product</h1>
            </div>

            <div className="flex justify-center mb-10 h-screen">
              <div className="bg-[#F2D8C7]  w-4/5 h-full  rounded-3xl">
              <div className="h-1/2  flex">
                <div className="w-1/2 h-full p-20  flex flex-col items-center">
                <h1 className="text-textcss font-semibold font-sans text-lg">Being able to sit back and relax in your favouite amchalistrulyoueofthegreatestfeelingsin ife That's wheywe' vecreated as tunning reange of lovingly hand make luxury armchairs, using only materais of the fine staquality . to ensure you have the best seat in the house</h1>
                <button className="bg-[#94A8BF] p-4 rounded-lg mt-2 ">Buy Now</button>
                </div>
                <div className="w-1/2">
                <div className="bg-secondary w-96 h-[570px] rounded-t-full relative bottom-52 left-72 ">
                  <Image src={Chair1} alt="" />
                </div>
                </div>
              </div>
              <div className="h-1/2  flex ">
              <div className="w-1/2">
              <div className="bg-secondary w-96 h-[540px] rounded-t-full relative bottom-24 right-10 mb-10 mt-20 ">
              <Image src={Chair2} alt="" className="scale-x-[-1]" />
              </div>
              </div>
              <div className="w-1/2 p-20 flex flex-col items-center ">
             <h1 className="text-textcss font-semibold font-sans text-lg">As in the best seatin the house .Combining comfort andcreativity, our smashing reange of ar mchars features desingns to suit any style . Perhaps your looing foramid-century masterpiece master piecs</h1>
             <button className="bg-secondary p-4 rounded-lg mt-5 ">Buy Now</button>
              </div>
              </div>
              </div>
            </div> 

            <div className="flex justify-around mt-64 mb-24">
              <div>
                <Image src={Arrow} alt="" className=" w-40"/>
                </div>
              <div>
                <h1 className="text-accent font-semibold font-sans text-4xl">Hot Deals For You</h1>
              </div>
              <div>
              <Image src={Arrow} alt="" className="rotate-180 w-40"/>
              </div>
            </div>
    </div>
    
  );
};

export default page;
