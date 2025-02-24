"use client";
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { toast } from "react-toastify"; // Import toastify
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT } from "../redux/slice/counterSlice";

const Products = () => {
    const [products, setProducts] = useState([]); // State for products
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(""); // State for error handling
    const [quantities, setQuantities] = useState({}); // State for quantities

    const counter = useSelector((state) => state.counter.count); // State for counter
    // console.log(counter);
    const dispatch = useDispatch(); // Use dispatch to dispatch actions

    // Use useEffect to call fetchProducts on component mount
    useEffect(() => {
        // Function to fetch products
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();
                setProducts(data); // Set the products data
                setLoading(false); // Set loading to false after data is fetched

                const initialQuantities = data.reduce((acc, product) => {
                    acc[product.id] = 0;
                    return acc;
                }, {});
                setQuantities(initialQuantities); // Set initial quantities
            } catch (err) {
                setLoading(false); // Set loading to false if an error occurs
                setError(err.message); // Set error message
                toast.error("Failed to fetch products"); // Show toast notification on error
            }
        };

        fetchProducts();
    }, []);

    // Function to handle increment button click
    const handleIncrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };
    // Function to handle decrement button click
    const handleDecrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(prev[id] - 1, 1), // Ensure quantity is at least 1
        }));
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if any
    }
    // Function to get the first 10 words
    const getFirst10Words = (description) => {
        const words = description.split(" ");
        const first10Words = words.slice(0, 10).join(" ");
        return first10Words + (words.length > 10 ? "..." : ""); // Add '...' if there are more than 10 words
    };
    // Function to get the first 10 words
    const getFirst5Words = (description) => {
        const words = description.split(" ");
        const first5Words = words.slice(0, 5).join(" ");
        return first5Words + (words.length > 5 ? "..." : ""); // Add '...' if there are more than 10 words
    };

    return (
        <div className="product-page bg-green-500/10">
            <div className="container mx-auto p-4 ">
            <h1 className="text-2xl font-bold text-center mb-6">
                Product Page
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="
                        border 
                        p-4 
                        flex 
                        flex-col 
                        items-center
                        justify-between
                        gap-3 
                        bg-white 
                        rounded-lg 
                        shadow-md 
                        h-3/2
                        w-full"
                    >
                        <h4 className="text-xl font-semibold text-center">
                            {getFirst5Words(product.title)}
                        </h4>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-24 object-contain mb-3"
                        />
                        <p className="text-sm text-center mb-3">
                            {getFirst10Words(product.description)}
                        </p>
                        <div className="flex items-center justify-between w-full mb-3 gap-1">
                            <p className="font-semibold text-lg w-1/2">
                                Price: ${product.price}
                            </p>
                            <button className="bg-green-500 py-2 px-3 rounded text-white w-1/2">
                                Add to Cart
                            </button>
                        </div>
                        <div className="flex items-center justify-between gap-5">
                            <button
                                className="bg-green-700 
                            hover:bg-green-800 
                            transition 
                            rounded-full 
                            p-2 
                            text-white"
                                onClick={() => handleDecrement(product.id)}
                            >
                                <FaMinus />
                            </button>
                            <span>{quantities[product.id]}</span>
                            <button
                                className="bg-green-700 
                            hover:bg-green-800 
                            transition 
                            rounded-full 
                            p-2 
                            text-white"
                                onClick={() => handleIncrement(product.id)}
                            >
                                <FiPlus />
                            </button>
                        </div>
                        <span className="text-lg font-semibold bg-green-500 text-white p-2 rounded-lg w-full text-center">
                            Total: $
                            {product.price * quantities[product.id].toFixed(2)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Products;
