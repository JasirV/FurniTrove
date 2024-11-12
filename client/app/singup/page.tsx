'use client';  
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Particles from "@/components/magicui/particles";
import ShineBorder from "@/components/magicui/shine-border";
import Image from 'next/image';
import Link from 'next/link';
const image5 = require('../../../assets/cs5.png').default;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email || !emailFormat.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password || !passwordFormat.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return; // Stop if validation fails

    setIsSubmitting(true);

    try {
      const response = await axios.post('/user/register', formData);
      console.log('User registered successfully:', response.data);
      // Handle successful registration here (e.g., redirect, show success message)
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error (e.g., show error message)
    } finally {
      setIsSubmitting(false);
    }
  };

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
        className='md:w-2/3 w-11/12 h-3/4 rounded-xl flex z-20 md:shadow-xl border relative'
        // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        {/* Form Section */}
        <div className='md:w-1/2 w-full h-full flex flex-col justify-center p-2 md:p-10 z-30 relative'>
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
            <p className='font-medium text-md text-textcss'>
              <Link href='/login'>Already have an account?</Link>
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center gap-4 p-4'>
            <div className='w-full'>
              <label htmlFor="firstName" className='block text-sm font-normal text-textcss mb-1'>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className='bg-transparent border-b border-textcss w-full p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
            </div>
            <div className='w-full'>
              <label htmlFor="lastName" className='block text-sm font-normal text-textcss mb-1'>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className='bg-transparent border-b border-textcss w-full p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
            </div>
            <div className='w-full'>
              <label htmlFor="email" className='block text-sm font-normal text-textcss mb-1'>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                className='bg-transparent w-full p-3 border-b border-textcss rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
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
                value={formData.password}
                onChange={handleChange}
                className='bg-transparent w-full p-3 border-b border-textcss rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            <div className='w-full mt-4'>
              <button
                type="submit"
                className={`bg-[#94A8BF] w-full p-3 rounded-full text-white font-medium hover:bg-[#505f70] transition-colors duration-200 z-40 relative ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        </div>

        <div className='w-1/2  h-full hidden relative md:flex max-w-[32rem] items-center justify-center overflow-hidden rounded-lg '>
          <div className='h-5/6 w-5/6 rounded-lg'>
            <Image
              src={image5}
              alt="Furniture"
              className="transform"
            />
          </div>
        </div>
      </ShineBorder>
    </div>
  );
}

export default Page;
