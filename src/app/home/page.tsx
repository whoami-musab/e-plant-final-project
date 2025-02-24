// app/home/page.tsx
'use client';

import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/products');
  }

  return (
    <div className="main-page">
      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-green-500/20">
        <div className="about justify-evenly items-center container mx-auto flex flex-col md:flex-row gap-4 w-full h-screen py-4">
          
          {/* Button Section */}
          <div className="btn w-10/12 md:w-1/2 p-4 flex flex-col items-center justify-center gap-4">
            <div className="reviews flex flex-col md:flex-row items-center gap-3">
              <span className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>100,000+ 5-star Reviews</span>
            </div>
            <h1 className="text-green-500 font-bold text-5xl text-center">Plant Green</h1>
            <p className="text-green-500 font-bold">Browse All Categories</p>
            <button className="
              flex
              items-center
              justify-around
              bg-green-500
              py-2
              px-3
              w-full 
              rounded 
              hover:bg-green-700
              transition
              text-2xl
              text-white"
              onClick={handleNavigate}
            >
              <span>See All Products</span>
              <span className="text-4xl">
                <MdArrowRightAlt />
              </span>
            </button>
          </div>
          
          {/* Image Section */}
          <div className="selection:bg-green-500/30 text-white w-full relative h-72 md:h-[500px]">
            <Image 
              src='https://www.trimitra-perkasa.com/uploads/posts/trimitra-image-2025-01-03-at-20:24:41-trc.webp' 
              alt="logo" 
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
