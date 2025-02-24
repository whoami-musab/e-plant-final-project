"use client"; // Make sure this is included at the top if you're using client-side functionality

import { useRouter } from "next/navigation"; // Correct import for useRouter in Next.js 13+ App Directory
import React from "react";
import { toast } from "react-toastify"; // Ensure you have the toast library set up correctly

const Cart = () => {
    // Initialize useRouter hook
    const router = useRouter();

    const handleCheckout = () => {
        // Redirect to the checkout page
        router.push("/checkout");

        // Show a toast notification upon checkout
        toast.success("Proceeding to checkout!");
    };

    return (
        <div className="w-full flex flex-col items-center gap-4 p-5 h-screen">
            <span>Total Amount: $0.00</span>

            {/* Checkout Button */}
            <button
                onClick={handleCheckout}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            >
                Continue to Checkout
            </button>
        </div>
    );
};

export default Cart;
