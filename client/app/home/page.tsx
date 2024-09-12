"use client";
import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import ImgBg from "../../../assets/Image.jpg";
import Image from "next/image";
import Arrow from "../../../assets/Arrow.png";
import Chair1 from "../../../assets/chair1.png";
import Chair2 from "../../../assets/cahir2.png";
import mirror from "../../../assets/mir.png";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { products } from "../../data/productDetails";
import Products from "../../data/productsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselStyles.css";
import Footer from "@/components/Footer";

const page = () => {
  type Category =
    | "Living Room"
    | "Bedroom"
    | "Dining Room"
    | "Office"
    | "Outdoor"
    | "Home Decor";
  const categories: Category[] = [
    "Living Room",
    "Bedroom",
    "Dining Room",
    "Office",
    "Outdoor",
    "Home Decor",
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "0px",
    speed: 500,
    initialSlide: 1,
  };
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className=" md:w-1/2 md:h-screen  w-full">
          <h1 className="text-textcss text-4xl font-sans font-bold ml-20 mt-14 md:text-3xl lg:text-7xl">
            Modern <br /> Furniture
          </h1>
          <h4 className="text-accent text-sm font-sans font-semibold ml-20 mt-10 md:text-lg ">
            we combine interior and exterior design
            <br /> service and often provide them as a single <br /> solution
          </h4>
          <div className="flex gap-2 ml-20 mt-10 md:gap-5">
            <button className="bg-[#94A8BF] p-2 md:text-lg text-xs rounded-lg md:p-4">
              Shop Now{" "}
            </button>
            <button className="bg-secondary p-2 md:text-lg text-xs rounded-lg md:p-4">
              Start Now
            </button>
          </div>
        </div>
        <div className=" w-1/2 h-screen  overflow-hidden hidden md:grid">
          <div className="bg-secondary h-2/3 w-2/3 rounded-full relative top-[3px] left-[300px] hidden"></div>
        </div>
      </div>
      <div className="absolute flex-col justify-center items-center top-48 right-9 h-[530px] w-[870px] hidden md:flex">
        <Image
          src={ImgBg}
          alt=""
          className="w-full h-full object-cover hidden md:flex "
        />
        <div className="w-10/12 h-5 bg-secondary rounded-xl absolute top-96 hidden"></div>
      </div>
      <div className="flex justify-around mt-10 mb-2 4">
        <div>
          <Image src={Arrow} alt="" className=" w-40 hidden md:flex" />
        </div>
        <div>
          <h1 className="text-accent font-semibold font-sans md:text-4xl text-2xl ">
            Hot Deals For You
          </h1>
        </div>
        <div>
          <Image
            src={Arrow}
            alt=""
            className="rotate-180 w-40 hidden md:flex"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center mt-12 mb-12 md:flex md:flex-row p-2 md:p-0 gap-2 md:gap-0">
        <div className="p-10 flex flex-col items-center justify-center gap-3 bg-seBg md:items-start">
          <LiaShippingFastSolid size={65} className="text-textcss" />
          <h1 className="text-textcss text-2xl font-semibold font-sans">
            Free Shopping
          </h1>
          <p className="text-textcss text-sm font-light font-serif w-1/2">
            we combine interior and exterior design service
          </p>
        </div>
        <div className="p-10 flex flex-col justify-center items-center bg-seBg md:items-start">
          <GiTakeMyMoney size={65} className="text-textcss" />
          <h1 className="text-textcss text-2xl font-semibold font-sans">
            Free Shopping
          </h1>
          <p className="text-textcss text-sm font-light font-serif w-1/2">
            we combine interior and exterior design service
          </p>
        </div>
        <div className="p-10 flex flex-col justify-center items-center bg-seBg md:items-start">
          <TiMessages size={65} className="text-textcss" />
          <h1 className="text-textcss text-2xl font-semibold font-sans">
            Free Shopping
          </h1>
          <p className="text-textcss text-sm font-light font-serif w-1/2">
            we combine interior and exterior design service
          </p>
        </div>
      </div>

      <div className="flex mt-10 mb-3 md:mb-56 justify-center">
        <h1 className="text-accent  font-semibold font-sans md:text-4xl text-2xl">
          This Week Featured Product
        </h1>
      </div>

      <div className="flex justify-center mb-0 md:mb-10 md:h-screen ">
        <div className="bg-[#F2D8C7]  w-full md:w-4/5 md:h-full h-2/3 rounded-3xl">
          <div className="h-1/2  flex md:flex-row flex-col">
            <div className="w-full md:w-1/2 h-full p-10 md:p-20  flex flex-col items-center">
              <h1 className="text-textcss font-semibold font-sans text-sm md:text-lg leading-snug md:leading-relaxed text-center md:text-left">
                Being able to sit back and relax in your favourite armchair is
                truly one of the greatest feelings in life. That's why we've
                created a stunning range of lovingly handmade luxury armchairs,
                using only materials of the finest quality to ensure you have
                the best seat in the house.
              </h1>

              <button className="bg-[#94A8BF] p-2 md:p-4 text-xs md:text-sm rounded-lg mt-2">
                Buy Now
              </button>
            </div>
            <div className="w-1/2 hidden md:flex">
              <div className="bg-secondary w-96 h-[570px] rounded-t-full relative bottom-52 left-72 ">
                <Image src={Chair1} alt="" />
              </div>
            </div>
          </div>
          <div className="h-1/2  flex ">
            <div className="w-1/2 hidden md:flex">
              <div className="bg-secondary w-96 h-[540px] rounded-t-full relative bottom-24 right-10 mb-10 mt-20 ">
                <Image src={Chair2} alt="" className="scale-x-[-1]" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col items-center ">
              <h1 className="text-textcss font-semibold font-sans text-sm md:text-lg leading-snug md:leading-relaxed text-center md:text-left">
                As in the best seat in the house. Combining comfort and
                creativity, our smashing range of armchairs features designs to
                suit any style. Perhaps youre looking for a mid-century
                masterpiece.
              </h1>
              <button className="bg-secondary p-2 md:p-4 text-xs md:text-sm rounded-lg mt-2 ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden justify-around mt-0 md:mt-64 mb-24 md:flex ">
        <div className="md:flex hidden">
          <Image src={Arrow} alt="" className=" w-40" />
        </div>
        <div>
          <h1 className="text-accent font-semibold font-sans md:text-4xl text-xl">
            Wooden Sofa Sets
          </h1>
        </div>
        <div>
          <Image
            src={Arrow}
            alt=""
            className="rotate-180 w-40 md:flex hidden"
          />
        </div>
      </div>

      <div className="w-full mt-28  flex-col items-center relative md:flex hidden">
  <div className="w-full md:w-11/12 m-auto h-full">
    <div className="slider-container h-full">
      <Slider {...settings}>
        {Products?.map((i) => (
          <div key={i.index} className="flex justify-center items-center">
            <Image
              className="h-40 w-40 sm:h-44 sm:w-44 md:h-52 md:w-52 rounded-full"
              src={i.img as string}
              alt={i.index.toString()}
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>

<div className="flex flex-col items-center md:mt-14 mt-5 mb-14">
  <h1 className="text-accent font-semibold font-sans md:text-4xl text-2xl text-center">
    A Huge Collection Of Furniture
  </h1>
</div>

<div className="w-full md:w-11/12 m-auto flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
  {categories.map((i, index) => (
    <div
      key={index}
      className="border-[#F7D8C4] border p-2 flex justify-center items-center"
    >
      <div className="bg-[#E5C8B2] w-24 sm:w-32 md:w-40 rounded-xl text-center flex items-center justify-center p-2 sm:p-3 text-xs sm:text-sm md:text-base text-textcss font-semibold font-sans">
        {i}
      </div>
    </div>
  ))}
</div>

<div className="w-full flex flex-col items-center md:items-start md:h-screen">
<div className="flex flex-wrap w-full md:w-11/12 justify-center gap-6 sm:gap-8 md:gap-14">
    {products.map((product) => (
      <div
        key={product.id}
        className="w-36 sm:w-48 md:w-60 border h-60 sm:h-64 md:h-72 flex flex-col items-center p-2 sm:p-3 md:p-4 border-textcss"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={240}
          height={160}
          layout="intrinsic"
          objectFit="cover"
        />
        <h2 className="mt-2 text-xs sm:text-sm md:text-lg font-semibold text-accent text-center">
          {product.name}
        </h2>
        <p className="text-sm sm:text-lg md:text-xl font-bold mt-1 text-textcss">
          ${product.price.toFixed(2)}
        </p>
      </div>
    ))}
  </div>

</div>

      <div className="w-full bg-redd-500  flex  mt-10 mb-16 ">
        <div className="w-1/2 p-5  justify-end md:flex hidden">
          <Image src={mirror} alt="mirror" className="w-96 min-h-96" />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-6 md:gap-12 p-6 md:p-14">
          <h1 className="text-lg md:text-3xl text-textcss">
            We Are The Biggest Furniture Brands
          </h1>
          <h1 className="text-sm md:text-xl text-textcss">
            Over the years, we have always been at the forefront of the
            furniture industry, ensuring that every product we create reflects
            the highest quality.
          </h1>
          <button className="bg-[#94A8BF] p-2 md:p-4 w-2/5 sm:w-1/3 md:w-1/5 rounded-lg">
            Shop More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
