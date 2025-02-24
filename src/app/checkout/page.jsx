// "use client";

// import { useRouter } from "next/navigation";
// import { MdArrowRightAlt } from "react-icons/md";
// import { FaCreditCard, FaPaypal } from "react-icons/fa";

// export default function Checkout() {
//     const router = useRouter();

//     const handleCheckout = () => {
//         router.push("/confirmation"); // Navigate to confirmation page
//     };

//     return (
//         <div className="flex flex-col items-center justify-center bg-green-500/20">
//             <div className="checkout flex flex-col items-center justify-center md:flex-row gap-4 w-full h-screen py-4">
//                 {/* Checkout Form Section */}
//                 <div className="checkout-details mx-auto w-10/12 md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center justify-center gap-4 order-2 md:order-1">
//                     <div className="product-info w-full bg-white p-4 rounded-lg shadow-lg">
//                         <h2 className="text-green-500 font-bold text-3xl text-center">
//                             Payment Information
//                         </h2>

//                         {/* Credit Card Payment Option */}
//                         <div className="payment-option mt-4">
//                             <h3 className="text-xl font-semibold text-green-500">
//                                 Credit Card
//                             </h3>
//                             <form className="mt-3">
//                                 <input
//                                     type="text"
//                                     placeholder="Card Number"
//                                     className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Expiry Date (MM/YY)"
//                                     className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="CVV"
//                                     className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
//                                 />
//                                 <button
//                                     onClick={handleCheckout}
//                                     className="bg-green-500 text-white py-2 px-4 rounded-lg w-full mt-4 flex items-center justify-center"
//                                 >
//                                     <FaCreditCard className="mr-2 text-xl" />
//                                     Proceed with Credit Card
//                                 </button>
//                             </form>
//                         </div>

//                         {/* PayPal Payment Option */}
//                         <div className="payment-option mt-6">
//                             <h3 className="text-xl font-semibold text-green-500">
//                                 PayPal
//                             </h3>
//                             <button
//                                 onClick={handleCheckout}
//                                 className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4 flex items-center justify-center"
//                             >
//                                 <FaPaypal className="mr-2 text-xl" />
//                                 Pay with PayPal
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdArrowRightAlt } from "react-icons/md";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

export default function Checkout() {
    const router = useRouter();

    const handleCheckout = () => {
        router.push("/confirmation"); // Navigate to confirmation page
    };

    // State for checkbox
    const [isChecked, setIsChecked] = useState(true); // Initially checked

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="flex flex-col  items-center gap-4 justify-center bg-green-500/20 min-h-screen w-full py-4">
            <div className="checkout flex flex-col container mx-auto md:flex-row gap-4 w-full px-4 md:px-8 items-center justify-center">
                {/* Checkout Form Section */}
                <div className="checkout-details w-full sm:w-10/12 md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center justify-center gap-4 bg-white rounded-lg shadow-lg">
                    <h2 className="text-green-500 font-bold text-3xl text-center">
                        Payment Information
                    </h2>

                    {/* Credit Card Payment Option */}
                    <div className="payment-option mt-4 w-full">
                        <h3 className="text-xl font-semibold text-green-500">
                            Credit Card
                        </h3>
                        <form className="mt-3">
                            <input
                                type="text"
                                placeholder="Card Number"
                                className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Expiry Date (MM/YY)"
                                className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                            />
                            <input
                                type="text"
                                placeholder="CVV"
                                className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                            />
                            <button
                                onClick={handleCheckout}
                                className="bg-green-500 transition hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full mt-4 flex items-center justify-center"
                            >
                                <FaCreditCard className="mr-2 text-xl" />
                                Proceed with Credit Card
                            </button>
                        </form>
                    </div>

                    {/* PayPal Payment Option */}
                    <div className="payment-option mt-6 w-full">
                        <h3 className="text-xl font-semibold text-green-500">
                            PayPal
                        </h3>
                        <button
                            onClick={handleCheckout}
                            className="bg-blue-500 transition hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full mt-4 flex items-center justify-center"
                        >
                            <FaPaypal className="mr-2 text-xl" />
                            Pay with PayPal
                        </button>
                    </div>
                </div>

                {/* Shipping Address and Billing */}
                <div className="shipping-billing-details w-full sm:w-10/12 md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center justify-center gap-4 bg-white rounded-lg shadow-lg">
                    <h3 className="text-green-500 font-bold text-2xl mb-3">
                        Billing Address
                    </h3>
                    <label htmlFor="fname" className="text-green-500">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John M. Doe"
                        className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                    />
                    <label htmlFor="email" className="text-green-500">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                    />
                    <label htmlFor="adr" className="text-green-500">
                        Address
                    </label>
                    <input
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                        className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                    />
                    <label htmlFor="city" className="text-green-500">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                        className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                    />

                    <div className="flex justify-between gap-2">
                        <div className="w-1/2">
                            <label htmlFor="state" className="text-green-500">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="NY"
                                className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="zip" className="text-green-500">
                                Zip
                            </label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                placeholder="10001"
                                className="p-2 border-2 border-green-500 rounded-lg mb-3 w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 w-11/12 justify-center">
                <input
                    type="checkbox"
                    defaultChecked={isChecked}
                    onChange={handleCheckboxChange}
                    name="sameadr"
                />
                <label className="text-green-500">
                    Shipping address same as billing
                </label>
            </div>
            <button
                onClick={handleCheckout}
                className="bg-green-500 hover:bg-green-600 transition text-white py-2 px-4 rounded-lg w-1/2 md:w-md flex items-center justify-center"
            >
                <span>Proceed to Checkout</span>
                <span className="text-4xl">
                    <MdArrowRightAlt />
                </span>
            </button>
        </div>
    );
}
