"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import api from "../../api/axiosIntespter";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation"; 

interface Product {
  _id: string;
  image: string;
  productName: string;
  price: number;
  description:string
}

const Page = () => {
  // State to store products data
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  // State for managing modal visibility and selected product
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
  console.log(products)

  // If still loading, show a loading state
  if (isLoading) return <div>Loading...</div>;

  // If there was an error, show an error message
  if (error) return <div>{error}</div>;

  // Open the modal with the selected product
  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const addToCart = () => {
    if (localStorage.getItem('token')) {
    } else {
      router.push('/login'); 
    }
  };

  return (
    <div className="min-h-screen">
      {/* NavBar Section */}
      <div className="sticky top-0 z-10 w-full">
        <NavBar />
      </div>

      {/* Products Section */}
      <div className="w-full flex flex-col items-center md:h-full pt-16 px-4 md:px-0">
       <h1 className="text-4xl font-bold mb-6 text-textcss"> Our Products </h1>
        <div className="flex flex-wrap w-full md:w-11/12 justify-center gap-6 sm:gap-8 md:gap-14">
          {products?.map((product: Product) => (
            <div
              key={product._id}
              className="w-36 sm:w-48 md:w-60 border h-60 sm:h-64 md:h-72 flex flex-col items-center p-2 sm:p-3 md:p-4 border-textcss shadow-md rounded-lg cursor-pointer"
              onClick={() => openModal(product)} // Open modal on product click
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
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} addToCart={addToCart} />
      )}

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose,addToCart}) => {

  return (
    <div
      className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className=" backdrop-blur-sm p-8  shadow-lg bg-primary rounded-lg md:w-1/2 cursor-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex justify-end">
            <h1  onClick={onClose} className="text-xl font-semibold text-textcss md:mr-7 cursor-pointer">x</h1>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-textcss text-center">Product Details</h2>
        <div className="flex flex-col items-center">
          {/* Modal Content using the passed product props */}
          <Image
            src={product.image}
            alt={product.productName}
            width={240}
            height={160}
            objectFit="cover"
            className="w-[240px] h-[160px] rounded-lg"
          />
          <p className="mt-4 text-lg text-textcss">{product.productName}</p>
          <p className="text-xl font-bold mt-2 text-textcss">${product.price.toFixed(2)}</p>
          <p className="text-sm  mt-2 text-textcss">${product.description}</p>
          <button 
            className="bg-[#94A8BF] p-1 mt-2 text-xs rounded-lg md:p-3"
            onClick={addToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
