// routes/factory.tsx
// export function loader() { return {}; }

// export default function Factory() {
//     return (
//         <div>
//             <h1>Factory & Machinery</h1>
//         </div>
//     );
// }
// 
import { Link } from "react-router";
import heroImg from "../components/Assets/image 1.png";
import heroImg2 from "../components/Assets/image 6.png";
import heroImg3 from "../components/Assets/Card.png"; // ✅ 2য় image এর path দিন

export function loader() { return {}; }

const cuttingMachinery = [
    { sl: "01", name: "Curring Machine 10\"", brand: "KM", qty: "03" },
    { sl: "02", name: "Curring Machine 8\"", brand: "KM", qty: "03" },
    { sl: "03", name: "Curring Machine 8\"", brand: "Open", qty: "01" },
    { sl: "04", name: "Band Knife Machine", brand: "Open", qty: "01" },
    { sl: "05", name: "End Cutting Machine", brand: "Eastman", qty: "02" },
    { sl: "06", name: "Fabric Inspection Machine", brand: "Open", qty: "01" },
    { sl: "07", name: "Fusing Machine (Medium) HP-650", brand: "Open", qty: "02" },
    { sl: "08", name: "Drill Machine", brand: "Open", qty: "02" },
    { sl: "09", name: "Numbering Machine", brand: "Open", qty: "05" },
];

export default function Factory() {
    return (
        <main className="w-full overflow-x-hidden font-sans">

            {/* ===== HERO BANNER ===== */}
            {/* ✅ height বাড়ানো হয়েছে */}
            <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] flex flex-col items-center justify-center text-center px-4 sm:px-8 mt-12">
                <img
                    src={heroImg}
                    alt="factory hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/55 z-0" />
                <div className="relative z-10 flex flex-col items-center px-4">
                    <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 flex-wrap justify-center">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>›</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Our Service</span>
                        <span>›</span>
                        <span className="text-white font-medium">Factory & Machinery</span>
                    </div>
                    <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4">
                        Our Manufacturing Excellence
                    </h1>
                    <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
                        State-of-the-art facilities meeting the highest global ethical and quality standards through innovation and precision.
                    </p>
                </div>
            </section>

            {/* ===== THE WAYS TO KEEP BUSINESS GROWING ===== */}
            <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Own Factory</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-5">
                        The Ways to Keep Business <br className="hidden sm:block" /> Growing
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
                        Are you interested to know details about our factory, production system and
                        company policy at a glance? Please have a look at the provided pdf file.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="flex items-center gap-0 overflow-hidden rounded-xl shadow-md min-w-[180px] border border-gray-700">
                            <div className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-4 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 16l-6-6h4V4h4v6h4l-6 6z" />
                                    <rect x="4" y="18" width="16" height="2" rx="1" />
                                </svg>
                            </div>
                            <div className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors px-4 py-3 flex items-center gap-3 flex-1">
                                <div className="text-left">
                                    <p className="text-[10px] text-white/60 uppercase tracking-widest leading-none mb-0.5">DOWNLOAD</p>
                                    <p className="text-sm font-bold text-white leading-none">FILE</p>
                                </div>
                                <div className="ml-auto flex flex-col items-center">
                                    <div className="bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm leading-none mb-0.5">PDF</div>
                                    <div className="w-6 h-7 bg-white/10 rounded-sm flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/70" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className="px-7 py-3 bg-[#1a9fd4] hover:bg-[#1589b8] text-white font-semibold rounded-xl transition-all duration-200 shadow-md text-sm min-w-[120px]">
                            View PDF
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== ADVANCED MACHINERY ===== */}
            <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 sm:mb-14">
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Machinery</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Advanced Machinery</h2>
                        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                            We invest in the latest industry 4.0 technology to reduce waste and maximize efficiency.
                        </p>
                    </div>

                    {/* ✅ দুটো image পাশাপাশি */}
                    {/* ✅ দুটো আলাদা card - প্রতিটায় একটা image */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {[
                            { label: "NEEDLE DETECTOR MACHINE", img: heroImg2 },  // needle detector এর image
                            { label: "THREAD SUCKING MACHINE", img: heroImg3 },   // thread sucking এর image
                        ].map((machine) => (
                            <div key={machine.label} className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden group">
                                <img
                                    src={machine.img}
                                    alt={machine.label}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Label overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 sm:px-6 py-3 sm:py-4">
                                    <p className="text-white font-bold text-sm sm:text-base tracking-widest uppercase">
                                        {machine.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MACHINERY INVENTORY TABLE ===== */}
            <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12">
                        Our Machinery Inventory
                    </h2>
                    <div className="mb-3">
                        <h3 className="text-center text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6">Cutting Machinery</h3>
                    </div>
                    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full min-w-[500px] text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="text-left px-4 sm:px-6 py-3 sm:py-4 text-xs font-bold text-gray-600 uppercase tracking-wider w-16">SL No.</th>
                                    <th className="text-left px-4 sm:px-6 py-3 sm:py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Machine Name</th>
                                    <th className="text-left px-4 sm:px-6 py-3 sm:py-4 text-xs font-bold text-gray-600 uppercase tracking-wider w-32">Brand</th>
                                    <th className="text-right px-4 sm:px-6 py-3 sm:py-4 text-xs font-bold text-gray-600 uppercase tracking-wider w-24">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cuttingMachinery.map((row, index) => (
                                    <tr key={row.sl} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-500 text-xs sm:text-sm">{row.sl}</td>
                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-800 text-xs sm:text-sm font-medium">{row.name}</td>
                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-500 text-xs sm:text-sm">{row.brand}</td>
                                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-800 text-xs sm:text-sm text-right">{row.qty}</td>
                                    </tr>
                                ))}
                                <tr className="bg-gray-50 border-t-2 border-gray-300">
                                    <td colSpan={3} className="px-4 sm:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm font-bold text-gray-700">
                                        Total Cutting Machinery
                                    </td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-right text-sm sm:text-base font-extrabold text-gray-900">
                                        20
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </main>
    );
}