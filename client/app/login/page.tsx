import React from 'react';
import Particles from "@/components/magicui/particles";
import ShineBorder from "@/components/magicui/shine-border";
import Image from 'next/image';
import Link from 'next/link';
const image5 =require('../../../assets/cs5.png').default

const Page = () => {
  const slugs = [
    "typescript", 
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",   
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <div className='bg-primary flex justify-center items-center h-screen w-full relative'>
      {/* Particles background */}
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={500}
        ease={80}
        color='black'
        refresh
      />

      {/* Shine Border */}
      <ShineBorder
        className='w-2/3 h-3/4 rounded-xl flex z-20 md:shadow-xl border relative'
        // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <div className='w-1/2 h-full relative flex max-w-[32rem] items-center justify-center overflow-hidden rounded-lg '>
        
        <div className='h-5/6 w-5/6  rounded-lg'>
        <Image
          src={image5}
          alt=""
          className="transform scale-x-[-1]"
        />
        </div>
        </div>

        {/* Form Section */}
        <div className='w-1/2 h-full flex flex-col justify-center p-10 z-30 relative'>
          {/* Heading and Icon */}
          <div className='mb-6'>
            <div className='flex items-center gap-3'>
              <div className='bg-red-50 w-8 h-8 rounded-full flex items-center justify-center'>
                {/* Optional: Add an icon or initial here */}
              </div>
              <h1 className='text-xl font-medium text-textcss'>FurniTrove</h1>
            </div>
          </div>

          {/* Welcome Text */}
          <div className='ml-10 mb-6'>
            <p  className='font-medium text-md text-textcss'><Link href='/singup'>Create your account</Link> </p>
            <p className='font-light text-sm text-textcss'>Welcome back</p>
          </div>

          {/* Form Section */}
          <form action="" className='w-full flex flex-col justify-center items-center gap-4 p-4'>
            <div className='w-full'>
              <label htmlFor="email" className='block text-sm font-normal text-textcss mb-1'>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                className='bg-gray-100 w-full p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            
            <div className='w-full'>
              <label htmlFor="password" className='block text-sm font-normal text-textcss mb-1'>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className='bg-gray-100 w-full p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            
            <div className='w-full mt-4'>
              <button
                className='bg-[#94A8BF] w-full p-3 rounded-full text-white font-medium hover:bg-[#505f70] transition-colors duration-200 z-40 relative'
              >
                Login
              </button>
            </div>
          </form>

          {/* Forgot Password Link */}
          <div className='flex w-full justify-end opacity-60 font-light mt-2'>
            <a href="#" className='text-sm hover:underline'>Forgot Password?</a>
          </div>
        </div>
      </ShineBorder>
    </div> 
  );
}

export default Page;
