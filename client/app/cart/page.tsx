"use client";
import api from '@/api/axiosIntespter';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface Product {
    _id: string;
    image: string;
    productName: string;
    price: number;
    description:string
  }
const page = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // State for managing modal visibility and selected product
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [count,setCount]=useState(1)
  
    // Fetch products data on mount
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await api("users/products");
          setProducts(response.data.data);
          setIsLoading(false);
        } catch (err) {
          setError("Error fetching products");
          setIsLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  return (
    <div>
        <div className="sticky top-0 z-10 w-full">
        <NavBar />
      </div>
        <div className='w-full flex justify-center items-center md:mt-10 mt-2'>
            <h1 className='md:text-4xl text-2xl text-textcss font-bold'>Cart</h1>
        </div>
        <div className=' w-11/12 m-auto md:mt-8 mt-4'>
        <div className="flex flex-wrap w-full md:p-20 justify-center gap-6 sm:gap-8 md:gap-14 mb-5">
          {products?.map((product: Product) => (
            <div
              key={product._id}
              className="w-full sm:w-48 md:w-60 border flex flex-col items-center justify-between p-2 sm:p-3 md:p-4 border-textcss shadow-md rounded-lg cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.productName}
                width={240}
                height={160}
                objectFit="cover"
                className="w-[240px] h-[160px] rounded-lg"
              />
              <h2 className="mt-2 text-xs sm:text-sm md:text-lg font-semibold text-accent text-center">
                {product.productName}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl font-bold mt-1 text-textcss">
                ${product.price.toFixed(2)}
              </p>
              <div className='mt-4 flex gap-2'>
                <button className='bg-textcss px-3 py-1 text-center rounded-full'>+</button>
                <h1 className='text-textcss font-bold text-2xl'>{count}</h1>
                <button className='bg-textcss px-3 py-1 text-center rounded-full'>-</button>
              </div>
            </div>
          ))}
        </div>             
        </div>
    </div>
  )
}

export default page