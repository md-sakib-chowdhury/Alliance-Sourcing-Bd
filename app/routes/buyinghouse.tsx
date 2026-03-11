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
import { Link } from "react-router";
import heroImg from "../components/Assets/52.png";

export function loader() { return {}; }

// Product data
const products = {
    knitwear: {
        label: "Knitwear",
        subcategories: [
            {
                name: "T-Shirt",
                items: [
                    { name: "Classic Cotton Crew T-Shirt" },
                    { name: "Premium Soft Touch V-Neck T-Shirt" },
                    { name: "Pique Polo Shirt" },
                    { name: "Urban Style Graphic T-Shirt" },
                ],
            },
            {
                name: "Polo",
                items: [
                    { name: "Classic Pique Polo Shirt" },
                    { name: "Premium Soft Touch V-Neck T-Shirt" },
                    { name: "Sport Dry Polo Shirt" },
                    { name: "Urban Style Graphic T-Shirt" },
                ],
            },
            {
                name: "Hoodie",
                items: [
                    { name: "Classic Pullover Hoodie" },
                    { name: "Zipper Front Fleece Hoodie" },
                    { name: "Premium Heavyweight Hoodie" },
                    { name: "Streetwear Oversized Hoodie" },
                ],
            },
            {
                name: "Jeansnes",
                items: [
                    { name: "Stretch Fit Denim Jeggings" },
                    { name: "High-Waist Slim Jeggings" },
                    { name: "Comfort Flex Jeggings" },
                    { name: "Streetwear Oversized Hoodie" },
                ],
            },
        ],
    },
    woven: {
        label: "Woven",
        subcategories: [
            {
                name: "Five Pocket Twill",
                items: [
                    { name: "Men's Five Pocket Twill" },
                    { name: "Men's Five Pocket Twill" },
                    { name: "Men's Five Pocket Twill" },
                    { name: "Men's Five Pocket Twill" },
                ],
            },
            {
                name: "Ladies Dress & Jackets",
                items: [
                    { name: "Ladies Dresses" },
                    { name: "Ladies Dresses" },
                    { name: "Ladies Jacket" },
                    { name: "Ladies Jacket" },
                ],
            },
            {
                name: "Girls Denim",
                items: [
                    { name: "Girls Wide Leg Jeggings" },
                    { name: "Girls Wide Leg Anti-Panic Tag" },
                    { name: "Premium Heavyweight Hoodie" },
                    { name: "Streetwear Oversized Hoodie" },
                ],
            },
            {
                name: "Jeansnes",
                items: [
                    { name: "Stretch Fit Denim Jeggings" },
                    { name: "High-Waist Slim Jeggings" },
                    { name: "Comfort Flex Jeggings" },
                    { name: "Streetwear Oversized Hoodie" },
                ],
            },
        ],
    },
};

export default function BuyingHouse() {
    return (
        <main className="w-full overflow-x-hidden font-sans">

            {/* ===== HERO BANNER ===== */}
            <section className="relative w-full h-56 sm:h-72 md:h-80 flex flex-col items-center justify-center text-center px-4 sm:px-8 mt-12">
                <img
                    src={heroImg}
                    alt="buying house hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/55 z-0" />
                <div className="relative z-10 flex flex-col items-center px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 flex-wrap justify-center">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <Link to="/" className="hover:text-white transition-colors">Our Services</Link>
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
                            {
                                icon: "📦",
                                title: "Product development and sampling",
                                desc: "We create service that match your ideal results",
                                highlight: true,
                            },
                            {
                                icon: "🔍",
                                title: "Supplier selection and evaluation",
                                desc: "We find the manufacturers who meet your standards",
                            },
                            {
                                icon: "💰",
                                title: "Price negotiation and order procurement",
                                desc: "We secure the best terms for your orders.",
                            },
                            {
                                icon: "🏭",
                                title: "Production follow-up and quality inspection",
                                desc: "We monitor every batch from loom to shipment.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className={`flex flex-col p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${item.highlight
                                    ? "bg-[#1a9fd4] text-white border-[#1a9fd4]"
                                    : "bg-white text-gray-900 border-gray-100"
                                    }`}
                            >
                                <div className={`text-2xl mb-4 w-10 h-10 flex items-center justify-center rounded-lg ${item.highlight ? "bg-white/20" : "bg-gray-50"}`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-base font-bold mb-2 ${item.highlight ? "text-white" : "text-gray-900"}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${item.highlight ? "text-white/80" : "text-gray-500"}`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRODUCT EXPERTISE ===== */}
            <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 sm:mb-14">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">Product Expertise</h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                            We specialize in a wide array of textile categories, ensuring the right technical expertise for every product type.
                        </p>
                    </div>

                    {/* Knitwear */}
                    <div className="mb-12 sm:mb-16">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-8 sm:mb-10 text-center border-b border-gray-200 pb-4">Knitwear</h3>
                        {products.knitwear.subcategories.map((sub) => (
                            <div key={sub.name} className="mb-8 sm:mb-10">
                                <h4 className="text-sm font-semibold text-gray-700 mb-4 sm:mb-5">{sub.name}</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
                                    {sub.items.map((item, i) => (
                                        <div key={i} className="flex flex-col items-center group">
                                            <div className="w-full aspect-square bg-gray-200 rounded-xl mb-2 sm:mb-3 flex items-center justify-center text-gray-400 text-xs group-hover:shadow-md transition-shadow duration-200">
                                                📷
                                            </div>
                                            <p className="text-center text-xs text-gray-600 leading-tight">{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Woven */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-8 sm:mb-10 text-center border-b border-gray-200 pb-4">Woven</h3>
                        {products.woven.subcategories.map((sub) => (
                            <div key={sub.name} className="mb-8 sm:mb-10">
                                <h4 className="text-sm font-semibold text-gray-700 mb-4 sm:mb-5">{sub.name}</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
                                    {sub.items.map((item, i) => (
                                        <div key={i} className="flex flex-col items-center group">
                                            <div className="w-full aspect-square bg-gray-200 rounded-xl mb-2 sm:mb-3 flex items-center justify-center text-gray-400 text-xs group-hover:shadow-md transition-shadow duration-200">
                                                📷
                                            </div>
                                            <p className="text-center text-xs text-gray-600 leading-tight">{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW WE WORK ===== */}
            <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                        {/* Left */}
                        <div className="lg:sticky lg:top-24">
                            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Process</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">How we work</h2>
                            <button className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                                Discuss
                            </button>
                        </div>
                        {/* Right - Steps */}
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
                                        {index < arr.length - 1 && (
                                            <div className="w-0.5 h-10 sm:h-12 bg-gray-200 my-1" />
                                        )}
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