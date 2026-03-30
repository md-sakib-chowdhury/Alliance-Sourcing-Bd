// // routes/about.tsx
// import heroImg from "../components/Assets/image 1.png";

// export function loader() { return {}; }

// export default function About() {
//     return (
//         <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden mt-12">

//             {/* Background Image */}
//             <img
//                 src={heroImg}
//                 alt="about bg"
//                 className="absolute inset-0 w-full h-full object-cover object-center"
//             />
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-black/40 z-0" />

//             {/* Content */}
//             <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">

//                 {/* Badge */}
//                 <div className="mb-6">
//                     <span className="inline-block px-6 py-2 bg-black/40 backdrop-blur-sm text-white text-sm sm:text-base font-medium rounded-full border border-white/20">
//                         Who We Are
//                     </span>
//                 </div>

//                 {/* Heading */}
//                 <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
//                     About Us
//                 </h1>

//                 {/* Sub Text */}
//                 <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
//                     We are a leading sourcing company based in Bangladesh,
//                     connecting international buyers with trusted manufacturers
//                     since 2010.
//                 </p>

//                 {/* Button */}
//                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                     <button className="px-10 py-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg min-w-[160px]">
//                         Contact US
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }
// import { Link } from "react-router";
// import heroImg from "../components/Assets/image 1.png";
// import heroImg2 from"../components/Assets/image 1.png";

// export function loader() { return {}; }

// export default function About() {
//     return (
//         <main className="w-full overflow-x-hidden font-sans">

//             {/* ===== HERO BANNER ===== */}
//             <section className="relative w-full h-764 sm:h-80 flex flex-col items-center justify-center text-center px-6 mt-12">
//                 <img
//                     src={heroImg}
//                     alt="about hero"
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                 />
//                 <div className="absolute inset-0 bg-black/55 z-0" />
//                 <div className="relative z-10 flex flex-col items-center">
//                     {/* Breadcrumb */}
//                     <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
//                         <Link to="/" className="hover:text-white transition-colors">Home</Link>
//                         <span>›</span>
//                         <span className="text-white font-medium">About Us</span>
//                     </div>
//                     <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
//                         About Alliance Sourcing BD
//                     </h1>
//                     <p className="text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed">
//                         Your premier partner in seamless garment sourcing and global manufacturing excellence,
//                         bridging the gap between design and production.
//                     </p>
//                 </div>
//             </section>

//             {/* ===== PROFESSIONAL BUYING HOUSE ===== */}
//             <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-white">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//                         {/* Image */}
//                         <div className="w-full h-80 lg:h-[440px] rounded-2xl bg-gray-200 overflow-hidden flex items-center justify-center text-gray-400 text-lg">
                          
//                         </div>
//                         {/* Content */}
//                         <div>
//                             <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-3">
//                                 Established Excellence
//                             </p>
//                             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
//                                 Professional buying <br /> house services
//                             </h2>
//                             <p className="text-gray-500 text-base leading-relaxed mb-5">
//                                 Founded with a vision to revolutionize the apparel industry,
//                                 Alliance Sourcing BD has grown into a global leader in garment
//                                 sourcing. With decades of collective expertise, we bridge the
//                                 gap between world-class brands and high-quality manufacturing
//                                 units in Bangladesh and beyond.
//                             </p>
//                             <p className="text-gray-500 text-base leading-relaxed">
//                                 Our journey is defined by a relentless pursuit of excellence,
//                                 ethical practices, and a deep understanding of the fast-evolving
//                                 fashion landscape. We started as a small team with a big ambition:
//                                 to make international sourcing transparent, efficient, and sustainable.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ===== WHAT SETS US APART ===== */}
//             <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-white">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="text-center mb-14">
//                         <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-2">Why</p>
//                         <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">What sets us apart</h2>
//                         <p className="text-gray-400 text-base">We stand behind every garment</p>
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {[
//                             {
//                                 icon: "🏅",
//                                 title: "Quality assurance",
//                                 desc: "Rigorous testing at every production stage",
//                                 highlight: true,
//                             },
//                             {
//                                 icon: "〰️",
//                                 title: "Ethical sourcing",
//                                 desc: "Fair wages and safe working conditions",
//                             },
//                             {
//                                 icon: "💵",
//                                 title: "On-time delivery",
//                                 desc: "Your deadlines are our commitments",
//                             },
//                             {
//                                 icon: "🌐",
//                                 title: "Global network",
//                                 desc: "Connected across Bangladesh and beyond",
//                             },
//                         ].map((item) => (
//                             <div
//                                 key={item.title}
//                                 className={`flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg ${item.highlight
//                                     ? "border-orange-300 bg-orange-50"
//                                     : "border-gray-100 bg-white"
//                                     }`}
//                             >
//                                 <div className={`text-2xl mb-6 w-10 h-10 flex items-center justify-center rounded-lg ${item.highlight ? "bg-orange-100" : "bg-gray-50"}`}>
//                                     {item.icon}
//                                 </div>
//                                 <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
//                                 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ===== HOW WE WORK ===== */}
//             <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-gray-50">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//                         {/* Left */}
//                         <div className="lg:sticky lg:top-24">
//                             <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
//                             <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">How we work</h2>
//                             <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
//                                 Discuss
//                             </button>
//                         </div>

//                         {/* Right - Steps */}
//                         <div className="flex flex-col gap-0">
//                             {[
//                                 {
//                                     icon: "🤲",
//                                     title: "Consultation",
//                                     desc: "We listen to your needs and understand your specifications",
//                                     color: "bg-orange-100",
//                                 },
//                                 {
//                                     icon: "🤝",
//                                     title: "Supplier match",
//                                     desc: "We match you with manufacturers who meet your standards",
//                                     color: "bg-red-100",
//                                 },
//                                 {
//                                     icon: "🛒",
//                                     title: "Order management",
//                                     desc: "We negotiate terms and oversee production from start to finish",
//                                     color: "bg-blue-100",
//                                 },
//                                 {
//                                     icon: "🔍",
//                                     title: "Quality check",
//                                     desc: "Every batch is tested against your specifications and standards",
//                                     color: "bg-purple-100",
//                                 },
//                             ].map((item, index, arr) => (
//                                 <div key={item.title} className="flex items-start gap-5 relative">
//                                     {/* Line connector */}
//                                     <div className="flex flex-col items-center">
//                                         <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-xl flex-shrink-0 z-10`}>
//                                             {item.icon}
//                                         </div>
//                                         {index < arr.length - 1 && (
//                                             <div className="w-0.5 h-12 bg-gray-200 my-1" />
//                                         )}
//                                     </div>
//                                     <div className="pb-10">
//                                         <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
//                                         <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ===== FOOTER ===== */}
//             <footer className="w-full bg-gray-900 text-white pt-16 pb-8 px-6 sm:px-12 lg:px-24">
//                 <div className="max-w-6xl mx-auto">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
//                         {/* Left - Brand */}
//                         <div>
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="w-10 h-10 rounded-full bg-[#1a9fd4] flex items-center justify-center text-white font-bold text-sm">A</div>
//                                 <div>
//                                     <p className="font-bold text-white text-sm leading-tight">ALLIANCE</p>
//                                     <p className="font-bold text-white text-sm leading-tight">SOURCING BD</p>
//                                 </div>
//                             </div>
//                             <div className="mb-5">
//                                 <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Address</p>
//                                 <p className="text-gray-300 text-sm leading-relaxed">
//                                     Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh.
//                                 </p>
//                             </div>
//                             <div className="mb-6">
//                                 <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Contact</p>
//                                 <p className="text-gray-300 text-sm">01716054044</p>
//                                 <a href="mailto:faroque77@gmail.com" className="text-[#1a9fd4] text-sm hover:underline">
//                                     faroque77@gmail.com
//                                 </a>
//                             </div>
//                             {/* Social Icons */}
//                             <div className="flex items-center gap-4">
//                                 {["f", "in", "𝕏", "▶"].map((icon) => (
//                                     <button key={icon} className="w-8 h-8 rounded-full bg-gray-700 hover:bg-[#1a9fd4] flex items-center justify-center text-white text-xs transition-colors duration-200">
//                                         {icon}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Right - Quick Links */}
//                         <div className="lg:text-right">
//                             <p className="text-white font-bold text-base mb-5">Quick Links</p>
//                             <ul className="space-y-3">
//                                 {["About us", "Our services", "Factory network", "Quality control", "Contact us"].map((link) => (
//                                     <li key={link}>
//                                         <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
//                                             {link}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Bottom bar */}
//                     <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//                         <p className="text-gray-500 text-sm">© 2026 Alliance Sourcing BD</p>
//                         <div className="flex items-center gap-6">
//                             {["Privacy policy", "Terms of service", "Cookie settings"].map((item) => (
//                                 <a key={item} href="#" className="text-gray-500 text-sm hover:text-white transition-colors duration-200">
//                                     {item}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </footer>

//         </main>
//     );
// }
import { Link } from "react-router";
import heroImg from "../components/Assets/image 1.png";
import heroImg2 from "../components/Assets/image 1.png"; // এখানে আপনার desired image দিন

export function loader() { return {}; }

export default function About() {
    return (
        <main className="w-full overflow-x-hidden font-sans">

            {/* ===== HERO BANNER ===== */}
            {/* ✅ FIX 1 - height বাড়ানো হয়েছে */}
            <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] flex flex-col items-center justify-center text-center px-6 mt-12">
                <img
                    src={heroImg}
                    alt="about hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/55 z-0" />
                <div className="relative z-10 flex flex-col items-center">
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                      
                        <span className="text-white font-medium">About Us</span>
                    </div>
                    <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
                        About Alliance Sourcing BD
                    </h1>
                    <p className="text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed">
                        Your premier partner in seamless garment sourcing and global manufacturing excellence,
                        bridging the gap between design and production.
                    </p>
                </div>
            </section>

            {/* ===== PROFESSIONAL BUYING HOUSE ===== */}
            <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        {/* ✅ FIX 2 - Image বসানো হয়েছে */}
                        <div className="w-full h-80 lg:h-[440px] rounded-2xl overflow-hidden">
                            <img
                                src={heroImg2}
                                alt="buying house"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Content */}
                        <div>
                            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-3">
                                Established Excellence
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                                Professional buying <br /> house services
                            </h2>
                            <p className="text-gray-500 text-base leading-relaxed mb-5">
                                Founded with a vision to revolutionize the apparel industry,
                                Alliance Sourcing BD has grown into a global leader in garment
                                sourcing. With decades of collective expertise, we bridge the
                                gap between world-class brands and high-quality manufacturing
                                units in Bangladesh and beyond.
                            </p>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Our journey is defined by a relentless pursuit of excellence,
                                ethical practices, and a deep understanding of the fast-evolving
                                fashion landscape. We started as a small team with a big ambition:
                                to make international sourcing transparent, efficient, and sustainable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT SETS US APART ===== */}
            <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-2">Why</p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">What sets us apart</h2>
                        <p className="text-gray-400 text-base">We stand behind every garment</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "🏅", title: "Quality assurance", desc: "Rigorous testing at every production stage", highlight: true },
                            { icon: "〰️", title: "Ethical sourcing", desc: "Fair wages and safe working conditions" },
                            { icon: "💵", title: "On-time delivery", desc: "Your deadlines are our commitments" },
                            { icon: "🌐", title: "Global network", desc: "Connected across Bangladesh and beyond" },
                        ].map((item) => (
                            <div key={item.title} className={`flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg ${item.highlight ? "border-orange-300 bg-orange-50" : "border-gray-100 bg-white"}`}>
                                <div className={`text-2xl mb-6 w-10 h-10 flex items-center justify-center rounded-lg ${item.highlight ? "bg-orange-100" : "bg-gray-50"}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW WE WORK ===== */}
            <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="lg:sticky lg:top-24">
                            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">How we work</h2>
                            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                                Discuss
                            </button>
                        </div>
                        <div className="flex flex-col gap-0">
                            {[
                                { icon: "🤲", title: "Consultation", desc: "We listen to your needs and understand your specifications", color: "bg-orange-100" },
                                { icon: "🤝", title: "Supplier match", desc: "We match you with manufacturers who meet your standards", color: "bg-red-100" },
                                { icon: "🛒", title: "Order management", desc: "We negotiate terms and oversee production from start to finish", color: "bg-blue-100" },
                                { icon: "🔍", title: "Quality check", desc: "Every batch is tested against your specifications and standards", color: "bg-purple-100" },
                            ].map((item, index, arr) => (
                                <div key={item.title} className="flex items-start gap-5 relative">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-xl flex-shrink-0 z-10`}>
                                            {item.icon}
                                        </div>
                                        {index < arr.length - 1 && <div className="w-0.5 h-12 bg-gray-200 my-1" />}
                                    </div>
                                    <div className="pb-10">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="w-full bg-gray-900 text-white pt-16 pb-8 px-6 sm:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#1a9fd4] flex items-center justify-center text-white font-bold text-sm">A</div>
                                <div>
                                    <p className="font-bold text-white text-sm leading-tight">ALLIANCE</p>
                                    <p className="font-bold text-white text-sm leading-tight">SOURCING BD</p>
                                </div>
                            </div>
                            <div className="mb-5">
                                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Address</p>
                                <p className="text-gray-300 text-sm leading-relaxed">Asha Plaza (2nd floor), Hemayetpur, Savar, Dhaka, Bangladesh.</p>
                            </div>
                            <div className="mb-6">
                                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Contact</p>
                                <p className="text-gray-300 text-sm">01716054044</p>
                                <a href="mailto:faroque77@gmail.com" className="text-[#1a9fd4] text-sm hover:underline">faroque77@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4">
                                {["f", "in", "𝕏", "▶"].map((icon) => (
                                    <button key={icon} className="w-8 h-8 rounded-full bg-gray-700 hover:bg-[#1a9fd4] flex items-center justify-center text-white text-xs transition-colors duration-200">
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="lg:text-right">
                            <p className="text-white font-bold text-base mb-5">Quick Links</p>
                            <ul className="space-y-3">
                                {["About us", "Our services", "Factory network", "Quality control", "Contact us"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">© 2026 Alliance Sourcing BD</p>
                        <div className="flex items-center gap-6">
                            {["Privacy policy", "Terms of service", "Cookie settings"].map((item) => (
                                <a key={item} href="#" className="text-gray-500 text-sm hover:text-white transition-colors duration-200">{item}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

        </main>
    );
}