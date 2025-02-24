"use client";

import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

export default function Confirmation() {
    const router = useRouter();

    // Simulating order details
    const orderDetails = {
        product: "Plant Green",
        quantity: 1,
        subtotal: 30.0,
        shipping: 5.0,
        total: 35.0,
        paymentMethod: "Credit Card",
    };

    const handleReturnToHome = () => {
        router.push("/products"); // Go back to the home page after confirmation
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
            <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
                {/* Confirmation Header */}
                <div className="text-center mb-6">
                    <FaCheckCircle className="text-green-500 text-5xl" />
                    <h1 className="text-3xl text-green-500 font-bold mt-2">
                        Payment Successful!
                    </h1>
                    <p className="text-lg text-gray-600">
                        Thank you for your order. Your payment has been
                        successfully processed.
                    </p>
                </div>

                {/* Order Summary */}
                <div className="order-summary mb-6">
                    <h2 className="text-2xl font-bold text-green-500">
                        Order Summary
                    </h2>
                    <div className="mt-4">
                        <p>
                            <strong>Product:</strong> {orderDetails.product}
                        </p>
                        <p>
                            <strong>Quantity:</strong> {orderDetails.quantity}
                        </p>
                        <p>
                            <strong>Subtotal:</strong> $
                            {orderDetails.subtotal.toFixed(2)}
                        </p>
                        <p>
                            <strong>Shipping:</strong> $
                            {orderDetails.shipping.toFixed(2)}
                        </p>
                        <p className="font-bold text-xl">
                            <strong>Total:</strong> $
                            {orderDetails.total.toFixed(2)}
                        </p>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="payment-method mb-6">
                    <h3 className="text-xl font-bold text-green-500">
                        Payment Method
                    </h3>
                    <p className="text-lg">{orderDetails.paymentMethod}</p>
                </div>

                {/* Return to Home Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        className="bg-green-500 text-white px-6 py-3 rounded-lg text-2xl hover:bg-green-700 flex items-center"
                        onClick={handleReturnToHome}
                    >
                        <span>Return to Home</span>
                        <MdArrowRightAlt className="ml-3 text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}
