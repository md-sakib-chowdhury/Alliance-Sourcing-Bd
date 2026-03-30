import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import logoIcon from "../Assets/imagee.png"; // শুধু এই একটা logo

const Footer = () => {
    return (
        <footer className="bg-black text-white px-16 pt-16 pb-8">

            <div className="flex justify-between items-start mb-16">

                {/* Left Side */}
                <div className="flex flex-col gap-8">

                    {/* Logo - image এর মতো */}
                    <div className="flex items-center gap-3">
                        <img
                            src={logoIcon}
                            alt="Alliance Sourcing BD"
                            className="w-14 h-14 object-contain"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-white font-bold text-lg tracking-widest">
                                ALLIANCE
                            </span>
                            <span className="text-white font-bold text-lg tracking-widest">
                                SOURCING BD
                            </span>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <p className="font-bold mb-1">Address</p>
                        <p className="text-gray-300 text-sm">
                            Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="font-bold mb-1">Contact</p>
                        <a href="tel:01716054044" className="block text-gray-300 text-sm underline">
                            01716054044
                        </a>
                        <a href="mailto:faroque71@gmail.com" className="block text-gray-300 text-sm underline">
                            faroque71@gmail.com
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                        <a href="#" className="hover:text-gray-400"><FaXTwitter /></a>
                        <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
                    </div>
                </div>

                {/* Right Side - Quick Links */}
                <div className="text-right flex flex-col gap-4">
                    <p className="font-bold text-lg mb-2">Quick Links</p>
                    <Link to="/about" className="block text-gray-300 hover:text-white text-sm">About us</Link>
                    <Link to="/" className="block text-gray-300 hover:text-white text-sm">Our services</Link>
                    <Link to="/factory" className="block text-gray-300 hover:text-white text-sm">Factory network</Link>
                    <Link to="/" className="block text-gray-300 hover:text-white text-sm">Quality control</Link>
                    <Link to="/" className="block text-gray-300 hover:text-white text-sm">Contact us</Link>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 mb-6" />

            {/* Bottom Bar */}
            <div className="flex justify-between items-center text-sm text-gray-400">
                <p>© 2026 Alliance Sourcing BD</p>
                <div className="flex gap-6">
                    <a href="#" className="underline hover:text-white">Privacy policy</a>
                    <a href="#" className="underline hover:text-white">Terms of service</a>
                    <a href="#" className="underline hover:text-white">Cookie settings</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;