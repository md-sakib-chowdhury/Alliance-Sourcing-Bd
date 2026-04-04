// routes/buyinghouse.tsx
// import heroImg from "../components/Assets/52.png";

// export function loader() { return {}; }

// export default function BuyingHouse() {
//     return (
//         <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden mt-12">

//             {/* Background Image */}
//             <img
//                 src={heroImg}
//                 alt="buying house bg"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//             />
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-black/40 z-0" />

//             {/* Content */}
//             <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">

//             </div>
//         </section>
//     );
// }
// 

// import { Link } from "react-router";
// import heroImg from "../components/Assets/image 3.png";

// export function loader() { return {}; }

// const products = {
//     knitwear: {
//         label: "Knitwear",
//         subcategories: [
//             {
//                 name: "T-Shirt",
//                 items: [
//                     { name: "Classic Cotton Crew T-Shirt", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
//                     { name: "Premium Soft Touch V-Neck T-Shirt", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80" },
//                     { name: "Pique Polo Shirt", img: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&q=80" },
//                     { name: "Urban Style Graphic T-Shirt", img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80" },
//                 ],
//             },
//             {
//                 name: "Polo",
//                 items: [
//                     { name: "Urban Style Graphic T-Shirt", img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&q=80" },

//                     { name: "Sport Dry Polo Shirt", img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&q=80" },
//                     { name: "Urban Style Graphic T-Shirt", img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&q=80" },
//                     { name: "Sport Dry Polo Shirt", img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&q=80" },
//                 ],
//             },
//             {
//                 name: "Hoodie",
//                 items: [
//                     { name: "Classic Pullover Hoodie", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80" },
//                     { name: "Zipper Front Fleece Hoodie", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
//                     { name: "Premium Heavyweight Hoodie", img: "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?w=400&q=80" },
//                     { name: "Premium Heavyweight Hoodie", img: "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?w=400&q=80" },
//                 ],
//             },
//             {
//                 name: "Jeansnes",
//                 items: [
//                     { name: "Stretch Fit Denim Jeggings", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
//                     { name: "High-Waist Slim Jeggings", img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&q=80" },
//                     { name: "Comfort Flex Jeggings", img: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&q=80" },
//                     { name: "Streetwear Oversized Hoodie", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&q=80" },
//                 ],
//             },
//         ],
//     },
//     woven: {
//         label: "Woven",
//         subcategories: [
//             {
//                 name: "Five Pocket Twill",
//                 items: [
//                     { name: "Men's Five Pocket Twill", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
//                     { name: "Men's Five Pocket Twill", img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&q=80" },
//                     { name: "Men's Five Pocket Twill", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
//                     { name: "Men's Five Pocket Twill", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
//                 ],
//             },
//             {
//                 name: "Ladies Dress & Jackets",
//                 items: [
//                     { name: "Ladies Dresses", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
//                     { name: "Ladies Dresses", img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&q=80" },
//                     { name: "Ladies Jacket", img: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80" },
//                     { name: "Ladies Jacket", img: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80" },


//                 ],
//             },
//             {
//                 name: "Girls Denim",
//                 items: [
//                     { name: "Girls Wide Leg Jeggings", img: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&q=80" },
//                     { name: "Girls Wide Leg Anti-Panic Tag", img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&q=80" },
//                     { name: "Girls Slim Fit Denim", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
//                     { name: "Girls Casual Denim Jeans", img: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&q=80" },
//                 ],
//             },
//             {
//                 name: "Jeansnes",
//                 items: [
//                     { name: "Stretch Fit Denim Jeggings", img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&q=80" },

//                     { name: "Comfort Flex Jeggings", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80" },
//                     { name: "Jeggings", img: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400&q=80" },
//                     { name: "Girls Wide Leg Jeggings", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80" },

//                 ],
//             },
//         ],
//     },
// };

// export default function BuyingHouse() {
//     return (
//         <main className="w-full overflow-x-hidden font-sans">

//             {/* ===== HERO BANNER ===== */}
//             {/* ✅ FIX 1 - height বাড়ানো */}
//             <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] flex flex-col items-center justify-center text-center px-4 sm:px-8 mt-12">
//                 <img
//                     src={heroImg}
//                     alt="buying house hero"
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                 />
//                 <div className="absolute inset-0 bg-black/55 z-0" />
//                 <div className="relative z-10 flex flex-col items-center px-4">
//                     <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 flex-wrap justify-center">
//                         <Link to="/" className="hover:text-white transition-colors">Home</Link>
//                         <span>›</span>
//                         <Link to="/" className="hover:text-white transition-colors">Our Services</Link>
//                         <span>›</span>
//                         <span className="text-white font-medium">Buying House Services</span>
//                     </div>
//                     <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4">
//                         Professional Buying & <br className="hidden sm:block" />
//                         Sourcing Services
//                     </h1>
//                     <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
//                         Step-by-step on to follow-keep the highest quality standards through based on EU process.
//                     </p>
//                 </div>
//             </section>

//             {/* ===== BUYING HOUSE SERVICES CARDS ===== */}
//             <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="text-center mb-10 sm:mb-14">
//                         <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
//                         <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">Buying house services</h2>
//                         <p className="text-gray-400 text-sm sm:text-base">We manage every step of your sourcing journey with precision.</p>
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//                         {[
//                             { icon: "📦", title: "Product development and sampling", desc: "We create service that match your ideal results", highlight: true },
//                             { icon: "🔍", title: "Supplier selection and evaluation", desc: "We find the manufacturers who meet your standards" },
//                             { icon: "💰", title: "Price negotiation and order procurement", desc: "We secure the best terms for your orders." },
//                             { icon: "🏭", title: "Production follow-up and quality inspection", desc: "We monitor every batch from loom to shipment." },
//                         ].map((item) => (
//                             <div key={item.title} className={`flex flex-col p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${item.highlight ? "bg-[#1a9fd4] text-white border-[#1a9fd4]" : "bg-white text-gray-900 border-gray-100"}`}>
//                                 <div className={`text-2xl mb-4 w-10 h-10 flex items-center justify-center rounded-lg ${item.highlight ? "bg-white/20" : "bg-gray-50"}`}>
//                                     {item.icon}
//                                 </div>
//                                 <h3 className={`text-base font-bold mb-2 ${item.highlight ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
//                                 <p className={`text-sm leading-relaxed ${item.highlight ? "text-white/80" : "text-gray-500"}`}>{item.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ===== PRODUCT EXPERTISE ===== */}
//             <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="text-center mb-10 sm:mb-14">
//                         <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">Product Expertise</h2>
//                         <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
//                             We specialize in a wide array of textile categories, ensuring the right technical expertise for every product type.
//                         </p>
//                     </div>

//                     {/* Knitwear */}
//                     <div className="mb-12 sm:mb-16">
//                         <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-8 sm:mb-10 text-center border-b border-gray-200 pb-4">Knitwear</h3>
//                         {products.knitwear.subcategories.map((sub) => (
//                             <div key={sub.name} className="mb-8 sm:mb-10">
//                                 <h4 className="text-sm font-semibold text-gray-700 mb-4 sm:mb-5">{sub.name}</h4>
//                                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
//                                     {sub.items.map((item, i) => (
//                                         <div key={i} className="flex flex-col items-center group">
//                                             {/* ✅ FIX 2 - Unsplash image */}
//                                             <div className="w-full aspect-square rounded-xl mb-2 sm:mb-3 overflow-hidden">
//                                                 <img
//                                                     src={item.img}
//                                                     alt={item.name}
//                                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                                 />
//                                             </div>
//                                             <p className="text-center text-xs text-gray-600 leading-tight">{item.name}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Woven */}
//                     <div>
//                         <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-8 sm:mb-10 text-center border-b border-gray-200 pb-4">Woven</h3>
//                         {products.woven.subcategories.map((sub) => (
//                             <div key={sub.name} className="mb-8 sm:mb-10">
//                                 <h4 className="text-sm font-semibold text-gray-700 mb-4 sm:mb-5">{sub.name}</h4>
//                                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
//                                     {sub.items.map((item, i) => (
//                                         <div key={i} className="flex flex-col items-center group">
//                                             <div className="w-full aspect-square rounded-xl mb-2 sm:mb-3 overflow-hidden">
//                                                 <img
//                                                     src={item.img}
//                                                     alt={item.name}
//                                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                                 />
//                                             </div>
//                                             <p className="text-center text-xs text-gray-600 leading-tight">{item.name}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ===== HOW WE WORK ===== */}
//             <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
//                         <div className="lg:sticky lg:top-24">
//                             <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Process</p>
//                             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">How we work</h2>
//                             <button className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
//                                 Discuss
//                             </button>
//                         </div>
//                         <div className="flex flex-col">
//                             {[
//                                 { icon: "🤲", title: "Consultation", desc: "We listen to your needs and understand your specifications", color: "bg-orange-100" },
//                                 { icon: "🤝", title: "Supplier match", desc: "We match you with manufacturers who meet your standards", color: "bg-red-100" },
//                                 { icon: "🛒", title: "Order management", desc: "We negotiate terms and oversee production from start to finish", color: "bg-blue-100" },
//                                 { icon: "🔍", title: "Quality check", desc: "Every batch is tested against your specifications and standards", color: "bg-purple-100" },
//                             ].map((item, index, arr) => (
//                                 <div key={item.title} className="flex items-start gap-4 sm:gap-5">
//                                     <div className="flex flex-col items-center">
//                                         <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.color} flex items-center justify-center text-lg sm:text-xl flex-shrink-0 z-10`}>
//                                             {item.icon}
//                                         </div>
//                                         {index < arr.length - 1 && <div className="w-0.5 h-10 sm:h-12 bg-gray-200 my-1" />}
//                                     </div>
//                                     <div className="pb-8 sm:pb-10">
//                                         <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
//                                         <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </main>
//     );
// }

import { Link } from "react-router";
import { useEffect, useState } from "react";
import heroImg from "../components/Assets/image 3.png";

export function loader() { return {}; }

interface ProductItem {
    name: string;
    img: string;
}

interface Subcategory {
    name: string;
    items: ProductItem[];
}

interface BuyingHouse {
    _id: string;
    name: string;
    buyer: string;
    country: string;
    status: string;
    category: string;
    subcategories: Subcategory[];
}

export default function BuyingHouse() {
    const [buyinghouses, setBuyinghouses] = useState<BuyingHouse[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/buyinghouse`)
            .then(res => res.json())
            .then(data => setBuyinghouses(data));
    }, []);

    const knitwear = buyinghouses.filter(bh => bh.category === "knitwear");
    const woven = buyinghouses.filter(bh => bh.category === "woven");

    return (
        <main className="w-full overflow-x-hidden font-sans">

            {/* ===== HERO BANNER ===== */}
            <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] flex flex-col items-center justify-center text-center px-4 sm:px-8 mt-12">
                <img src={heroImg} alt="buying house hero" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/55 z-0" />
                <div className="relative z-10 flex flex-col items-center px-4">
                    <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 flex-wrap justify-center">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-white font-medium">Buying House Services</span>
                    </div>
                    <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4">
                        Professional Buying & <br className="hidden sm:block" />
                        Sourcing Services
                    </h1>
                    <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
                        Step-by-step on to follow-keep the highest quality standards through based on EU process.
                    </p>
                </div>
            </section>

            {/* ===== BUYING HOUSE SERVICES CARDS ===== */}
            <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 sm:mb-14">
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">Buying house services</h2>
                        <p className="text-gray-400 text-sm sm:text-base">We manage every step of your sourcing journey with precision.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {[
                            { icon: "📦", title: "Product development and sampling", desc: "We create service that match your ideal results", highlight: true },
                            { icon: "🔍", title: "Supplier selection and evaluation", desc: "We find the manufacturers who meet your standards" },
                            { icon: "💰", title: "Price negotiation and order procurement", desc: "We secure the best terms for your orders." },
                            { icon: "🏭", title: "Production follow-up and quality inspection", desc: "We monitor every batch from loom to shipment." },
                        ].map((item) => (
                            <div key={item.title} className={`flex flex-col p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${item.highlight ? "bg-[#1a9fd4] text-white border-[#1a9fd4]" : "bg-white text-gray-900 border-gray-100"}`}>
                                <div className={`text-2xl mb-4 w-10 h-10 flex items-center justify-center rounded-lg ${item.highlight ? "bg-white/20" : "bg-gray-50"}`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-base font-bold mb-2 ${item.highlight ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
                                <p className={`text-sm leading-relaxed ${item.highlight ? "text-white/80" : "text-gray-500"}`}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BUYING HOUSE LIST ===== */}
            {buyinghouses.length > 0 && (
                <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10 sm:mb-14">
                            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Our Partners</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">Our Buying Houses</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {buyinghouses.map((bh) => (
                                <div key={bh._id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{bh.name}</h3>
                                    <p className="text-sm text-gray-500 mb-1">Buyer: {bh.buyer}</p>
                                    {bh.country && <p className="text-sm text-gray-500">Country: {bh.country}</p>}
                                    <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">{bh.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ===== PRODUCT EXPERTISE ===== */}
            <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">Product Expertise</h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                            We specialize in a wide array of textile categories.
                        </p>
                    </div>

                    {/* Knitwear */}
                    {knitwear.length > 0 && (
                        <div className="mb-12 sm:mb-16">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4">Knitwear</h3>
                            {knitwear.map((bh) =>
                                bh.subcategories?.map((sub) => (
                                    <div key={sub.name} className="mb-8">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-4">{sub.name}</h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
                                            {sub.items.map((item, i) => (
                                                <div key={i} className="flex flex-col items-center group">
                                                    <div className="w-full aspect-square rounded-xl mb-2 overflow-hidden">
                                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                    </div>
                                                    <p className="text-center text-xs text-gray-600 leading-tight">{item.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* Woven */}
                    {woven.length > 0 && (
                        <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4">Woven</h3>
                            {woven.map((bh) =>
                                bh.subcategories?.map((sub) => (
                                    <div key={sub.name} className="mb-8">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-4">{sub.name}</h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
                                            {sub.items.map((item, i) => (
                                                <div key={i} className="flex flex-col items-center group">
                                                    <div className="w-full aspect-square rounded-xl mb-2 overflow-hidden">
                                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                    </div>
                                                    <p className="text-center text-xs text-gray-600 leading-tight">{item.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* ===== HOW WE WORK ===== */}
            <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                        <div className="lg:sticky lg:top-24">
                            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Process</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">How we work</h2>
                        </div>
                        <div className="flex flex-col">
                            {[
                                { icon: "🤲", title: "Consultation", desc: "We listen to your needs and understand your specifications", color: "bg-orange-100" },
                                { icon: "🤝", title: "Supplier match", desc: "We match you with manufacturers who meet your standards", color: "bg-red-100" },
                                { icon: "🛒", title: "Order management", desc: "We negotiate terms and oversee production from start to finish", color: "bg-blue-100" },
                                { icon: "🔍", title: "Quality check", desc: "Every batch is tested against your specifications and standards", color: "bg-purple-100" },
                            ].map((item, index, arr) => (
                                <div key={item.title} className="flex items-start gap-4 sm:gap-5">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.color} flex items-center justify-center text-lg sm:text-xl flex-shrink-0 z-10`}>
                                            {item.icon}
                                        </div>
                                        {index < arr.length - 1 && <div className="w-0.5 h-10 sm:h-12 bg-gray-200 my-1" />}
                                    </div>
                                    <div className="pb-8 sm:pb-10">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}