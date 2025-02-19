'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

const Cart = () => {
    // const router = useRouter();
    const handleCheckout = () => {
        // router.push('/checkout'); // Redirect to checkout page using Next.js
        toast.success('Checkout successful!'); // Show toast notification on successful checkout
    };
  return (
    <div className='w-3/2 flex flex-col items-center gap-4 p-5'>
        <span>
            Total Amount: $0.00
        </span>
        <button onClick={handleCheckout} className='bg-green-500 text-white px-4 py-2 rounded mt-4'>
            Continue to Checkout
        </button>
    </div>
  )
}

export default Cart