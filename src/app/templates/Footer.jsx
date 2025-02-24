import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
    return (
        <div className="header-page">
            <footer className="py-2 px-3 bg-green-500 text-white flex items-center justify-center">
                <div className="flex items-center gap-3">
                    <LiaCopyrightSolid className="w-5 h-5" />
                    <span>2025 e-Plant. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
