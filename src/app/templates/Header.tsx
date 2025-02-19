import Link from "next/link";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";


const Header = () => {
    const cart = useSelector((state: { cart: { count: number } }) => state.cart.count);
    console.log(cart);
    return (
        <div className="header-page">
            <header className="py-2 px-3 bg-green-500 text-white">
            <nav>
                <ul className="flex items-center justify-between">
                    <li>
                        <Link
                            href="/"
                            className="flex flex-col items-center gap-2"
                        >
                            <h3 className="text-2xl">Plant Green</h3>
                            <FaCanadianMapleLeaf className="text-4xl" />
                        </Link>
                    </li>
                    <li>
                        <a href="/products" className="text-white text-2xl">
                            Products
                        </a>
                    </li>
                    <li className="hover:scale-110 transition-transform relative">
                        <a href="/cart">
                            <LuShoppingCart size={"3em"}/>
                        </a>
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-2 border border-white">
                            0
                        </span>
                    </li>
                </ul>
            </nav>
        </header>

        </div>
    );
};

export default Header;