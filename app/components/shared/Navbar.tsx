// import { useState, useEffect } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import logoIcon from "../Assets/imagee.png";
// import logoText from "../Assets/image.png";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navLinks = [
//         { label: "Home", href: "#home" },
//         { label: "About Us", href: "#about" },
//         { label: "Buying House", href: "#buying-house" },
//         { label: "Factory & Machinery", href: "#factory" },
//     ];

//     return (
//         <nav
//             className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white"
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 sm:h-18 lg:h-20 flex items-center justify-between">

//                 {/* ===== LOGO ===== */}
//                 <div className="flex items-center gap-3">
//                     <img
//                         src={logoIcon}
//                         alt="Alliance Sourcing BD Icon"
//                         className="h-10 sm:h-12 w-auto object-contain"
//                     />
//                     <img
//                         src={logoText}
//                         alt="Alliance Sourcing BD"
//                         className="h-7 sm:h-8 w-auto object-contain"
//                     />
//                 </div>

//                 {/* ===== DESKTOP NAV LINKS ===== */}
//                 <div className="hidden lg:flex items-center gap-10 xl:gap-14 text-[15px] font-medium text-gray-700">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.label}
//                             href={link.href}
//                             className="hover:text-[#1a9fd4] transition-colors duration-200 whitespace-nowrap"
//                         >
//                             {link.label}
//                         </a>
//                     ))}
//                 </div>

//                 {/* ===== CONTACT BUTTON (Desktop) ===== */}
//                 <div className="hidden lg:flex items-center">
//                     <button
//                         className="
//               px-6 py-3
//               bg-[#1a9fd4]
//               hover:bg-[#1589b8]
//               text-white
//               text-[15px]
//               font-medium
//               rounded-lg
//               transition-all duration-200
//               whitespace-nowrap
//               shadow-sm
//             "
//                     >
//                         Contact US
//                     </button>
//                 </div>

//                 {/* ===== MOBILE HAMBURGER ===== */}
//                 <div className="lg:hidden">
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="text-gray-800 focus:outline-none"
//                         aria-label="Toggle menu"
//                     >
//                         {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
//                     </button>
//                 </div>
//             </div>

//             {/* ===== MOBILE DROPDOWN MENU ===== */}
//             <div
//                 className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
//                     }`}
//             >
//                 <div className="px-6 pt-2 pb-5 space-y-2 border-t border-gray-100">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.label}
//                             href={link.href}
//                             className="block py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-[#1a9fd4] transition-colors duration-200"
//                             onClick={() => setMenuOpen(false)}
//                         >
//                             {link.label}
//                         </a>
//                     ))}

//                     <div className="pt-3 border-t border-gray-100">
//                         <button
//                             className="
//                 w-full
//                 py-3 px-4
//                 bg-[#1a9fd4]
//                 hover:bg-[#1589b8]
//                 text-white
//                 font-medium
//                 rounded-lg
//                 transition-all duration-200
//               "
//                             onClick={() => setMenuOpen(false)}
//                         >
//                             Contact US
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }
// import { useState, useEffect } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import logoIcon from "../Assets/imagee.png";
// import logoText from "../Assets/image.png";
// import heroImg from "../Assets/image 1.png";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navLinks = [
//         { label: "Home", href: "#home" },
//         { label: "About Us", href: "#about" },
//         { label: "Buying House", href: "#buying-house" },
//         { label: "Factory & Machinery", href: "#factory" },
//     ];

//     return (
//         <>
//             {/* ================= NAVBAR ================= */}

//             <nav
//                 className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 overflow-x-hidden ${scrolled ? "bg-white shadow-md" : "bg-white"}`}
//             >

//                 <div className="max-w-8xl mx-5 px-6 lg:px-10 h-12 flex items-center justify-between">
//                     {/* ===== LOGO ===== */}
//                     <div className="flex items-center gap-3">
//                         <img src={logoIcon} alt="Alliance Sourcing BD Icon" className="h-10 sm:h-12 w-auto object-contain" />
//                         <img src={logoText} alt="Alliance Sourcing BD" className="h-7 sm:h-8 w-auto object-contain" />
//                     </div>

//                     {/* ===== DESKTOP NAV LINKS ===== */}
//                     <div className="hidden lg:flex items-center gap-10 xl:gap-14 text-[18px] font-medium text-gray-700">
//                         {navLinks.map((link) => (
//                             <a key={link.label} href={link.href} className="hover:text-[#1a9fd4] transition-colors duration-200 whitespace-nowrap">
//                                 {link.label}
//                             </a>
//                         ))}
//                     </div>

//                     {/* ===== CONTACT BUTTON (Desktop) ===== */}
//                     <div className="hidden lg:flex items-center">
//                         <button className="px-6 py-3 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-[15px] font-medium rounded-lg transition-all duration-200 whitespace-nowrap shadow-sm">
//                             Contact US
//                         </button>
//                     </div>

//                     {/* ===== MOBILE HAMBURGER ===== */}
//                     <div className="lg:hidden">
//                         <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none" aria-label="Toggle menu">
//                             {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* ===== MOBILE DROPDOWN MENU ===== */}
//                 <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
//                     <div className="px-6 pt-2 pb-5 space-y-2 border-t border-gray-100">
//                         {navLinks.map((link) => (
//                             <a key={link.label} href={link.href} className="block py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-[#1a9fd4] transition-colors duration-200" onClick={() => setMenuOpen(false)}>
//                                 {link.label}
//                             </a>
//                         ))}
//                         <div className="pt-3 border-t border-gray-100">
//                             <button className="w-full py-3 px-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white font-medium rounded-lg transition-all duration-200" onClick={() => setMenuOpen(false)}>
//                                 Contact US
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* ================= HERO SECTION ================= */}
//             {/* <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden"> */}
//             <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden mt-16">
//                 {/* Background Image */}
//                 <img
//                     src={heroImg}
//                     alt="hero bg"
//                     className="absolute inset-0 w-full h-full object-cover object-center scale-95 origin-center"
//                 />
//                 <div className="absolute inset-0 z-0" />

//                 <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">

//                     {/* Badge */}
//                     <div className="mb-6">
//                         <span className="inline-block px-6 py-2 bg-black/40 backdrop-blur-sm text-white text-sm sm:text-base font-medium rounded-full border border-white/20">
//                             House Of Fashion Stitching
//                         </span>
//                     </div>

//                     {/* Heading */}
//                     <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
//                         Your trusted partner <br className="hidden sm:block" />
//                         in apparel sourcing
//                     </h1>

//                     {/* Sub Text */}
//                     <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
//                         We connect international buyers with reliable manufacturers across Bangladesh. From product development to final shipment, we handle every detail with precision and care.
//                     </p>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                         <button className="px-10 py-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg min-w-[160px]">
//                             Contact US
//                         </button>
//                         <button className="px-10 py-4 bg-white hover:bg-gray-100 text-[#1a9fd4] text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg min-w-[160px]">
//                             Learn More
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router";
import logoIcon from "../Assets/imagee.png";
import logoText from "../Assets/image.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "Buying House", to: "/buying-house" },
        { label: "Factory & Machinery", to: "/factory" },
    ];

    return (
        // <nav className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white"}`}>
        <nav className={`fixed
    top-4 sm:top-8 lg:top-6
    left-1/2 -translate-x-1/2
 w-[92vw] sm:w-[88vw] lg:w-[96vw] xl:w-[98vw]
    z-50 transition-all duration-300
    ${scrolled ? "bg-white shadow-md" : "bg-white/80"}
    backdrop-blur-md `}
        >
            <div className="max-w-8xl mx-5 px-6 lg:px-10 h-20 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <img src={logoIcon} alt="Icon" className="h-10 sm:h-12 w-auto object-contain" />
                    <img src={logoText} alt="Logo" className="h-7 sm:h-8 w-auto object-contain" />
                </div>

                {/* DESKTOP NAV LINKS */}
                <div className="hidden lg:flex items-center gap-10 xl:gap-14 text-[18px] font-medium">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.to}
                            className={({ isActive }) =>
                                `transition-colors duration-200 whitespace-nowrap ${isActive
                                    ? "text-[#1a9fd4] font-bold"
                                    : "text-gray-700 hover:text-[#1a9fd4]"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* CONTACT BUTTON */}
                <div className="hidden lg:flex items-center">
                    <button className="px-6 py-3 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-[15px] font-medium rounded-lg transition-all duration-200 shadow-sm">
                        Contact US
                    </button>
                </div>

                {/* MOBILE HAMBURGER */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                    </button>
                </div>
            </div>

            {/* MOBILE DROPDOWN */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pt-2 pb-5 space-y-2 border-t border-gray-100">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.to}
                            className={({ isActive }) =>
                                `block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${isActive
                                    ? "bg-sky-50 text-[#1a9fd4]"
                                    : "text-gray-700 hover:bg-sky-50 hover:text-[#1a9fd4]"
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <div className="pt-3 border-t border-gray-100">
                        <button className="w-full py-3 px-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white font-medium rounded-lg transition-all duration-200">
                            Contact US
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}