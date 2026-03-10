// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export default function Home() {
//   return <Welcome />;
// }

// import Navbar from "../components/shared/Navbar";  // ✅ নাম দাও

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <h1>Home Page</h1>
//     </>
//   );
// }
// routes/home.tsx

// import heroImg from "../components/Assets/image 1.png";

// export function loader() { return {}; }

// export default function Home() {
//   return (
//     <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden mt-16">
//       {/* Background Image */}
//       <img
//         src={heroImg}
//         alt="hero bg"
//         className="absolute inset-0 w-full h-full object-cover object-center scale-95 origin-center"
//       />
//       <div className="absolute inset-0 z-0" />

//       <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
//         {/* Badge */}
//         <div className="mb-6">
//           <span className="inline-block px-6 py-2 bg-black/40 backdrop-blur-sm text-white text-sm sm:text-base font-medium rounded-full border border-white/20">
//             House Of Fashion Stitching
//           </span>
//         </div>

//         {/* Heading */}
//         <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
//           Your trusted partner <br className="hidden sm:block" />
//           in apparel sourcing
//         </h1>

//         {/* Sub Text */}
//         <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
//           We connect international buyers with reliable manufacturers across Bangladesh.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <button className="px-10 py-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg min-w-[160px]">
//             Contact US
//           </button>
//           <button className="px-10 py-4 bg-white hover:bg-gray-100 text-[#1a9fd4] text-base sm:text-lg font-semibold rounded-xl shadow-lg min-w-[160px]">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import heroImg from "../components/Assets/image 1.png";

export function loader() { return {}; }

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden font-sans">

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden mt-12">
        <img
          src={heroImg}
          alt="hero bg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-black/40 backdrop-blur-sm text-white text-sm sm:text-base font-medium rounded-full border border-white/20">
              House Of Fashion Stitching
            </span>
          </div>
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
            Your trusted partner <br className="hidden sm:block" />
            in apparel sourcing
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            We connect international buyers with reliable manufacturers across Bangladesh.
            From product development to final shipment, we handle every detail with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg min-w-[160px]">
              Contact US
            </button>
            <button className="px-10 py-4 bg-white hover:bg-gray-100 text-[#1a9fd4] text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg min-w-[160px]">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHAT SETS US APART ===== */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-2">Why</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">What sets us apart</h2>
            <p className="text-gray-500 text-base sm:text-lg">We stand behind every garment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏅",
                title: "Quality assurance",
                desc: "Rigorous testing at every production stage"
              },
              {
                icon: "⚖️",
                title: "Ethical sourcing",
                desc: "Fair wages and safe working conditions"
              },
              {
                icon: "🚚",
                title: "On-time delivery",
                desc: "Your deadlines are our commitments"
              },
              {
                icon: "🌐",
                title: "Global network",
                desc: "Connected across Bangladesh and beyond"
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="text-3xl mb-4">{item.icon}</div>
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
          <div className="mb-14">
            <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-2">Process</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">How we work</h2>
            <p className="text-gray-500 text-base">Simple</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: "💬",
                title: "Consultation",
                desc: "We listen to your needs and understand your specifications"
              },
              {
                icon: "🤝",
                title: "Supplier match",
                desc: "We connect you with manufacturers who meet your standards"
              },
              {
                icon: "📋",
                title: "Order management",
                desc: "We negotiate terms and oversee production from start to finish"
              },
              {
                icon: "✅",
                title: "Quality check",
                desc: "Every batch is tested against your specifications and standards"
              },
            ].map((item, index) => (
              <div key={item.title} className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#e8f6fc] flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL BUYING HOUSE SERVICES ===== */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="w-full h-80 lg:h-[420px] rounded-2xl bg-gray-200 flex items-center justify-center text-gray-400 text-lg font-medium">
              📷 Image এখানে বসাও
            </div>
            {/* Content */}
            <div>
              <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Professional buying house services
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                We handle the complexities so you can focus on your business.
                Our buying house team's major point of excellence is connecting buyers with the right manufacturers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Product development and sampling",
                  "Supplier selection and evaluation",
                  "Price negotiation and order placement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#e8f6fc] text-[#1a9fd4] flex items-center justify-center text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-[#1a9fd4] hover:bg-[#1589b8] text-white font-semibold rounded-xl transition-all duration-200 shadow-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUYING HOUSE SERVICES CARDS ===== */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-[#fdf8f4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-2">Company</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Buying house services</h2>
            <p className="text-gray-500 text-base">We manage every step of your sourcing journey with precision.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: "📦",
                title: "Product development and sampling",
                desc: "We find and shortlist your ideal results",
                highlight: true
              },
              {
                icon: "🔍",
                title: "Supplier selection and evaluation",
                desc: "We find and shortlist your best factories"
              },
              {
                icon: "💰",
                title: "Price negotiation and order placement",
                desc: "We secure the best terms for your orders"
              },
              {
                icon: "🏭",
                title: "Production follow-up and quality inspection",
                desc: "We monitor every batch from loom to shipment"
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg ${item.highlight
                  ? "bg-[#1a9fd4] text-white border-[#1a9fd4]"
                  : "bg-white text-gray-900 border-gray-100"
                  }`}
              >
                <div className={`text-3xl mb-4`}>{item.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${item.highlight ? "text-white" : "text-gray-900"}`}>
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

      {/* ===== FACTORY AND MACHINERY ===== */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-3">Factory</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Factory and machinery capabilities
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                We work with modern facilities equipped for precision production.
                Our network includes the best factories with the latest technology.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "👕", title: "Garment production", desc: "State of the art" },
                  { icon: "🔧", title: "Maintenance and technical support", desc: "24/7 available" },
                  { icon: "🧵", title: "Machinery supply and setup", desc: "Latest models only" },
                  { icon: "⚙️", title: "Production optimization", desc: "Efficiency experts" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="px-8 py-3 bg-[#1a9fd4] hover:bg-[#1589b8] text-white font-semibold rounded-xl transition-all duration-200 shadow-sm">
                Details
              </button>
            </div>
            {/* Image placeholder */}
            <div className="w-full h-80 lg:h-[420px] rounded-2xl bg-gray-200 flex items-center justify-center text-gray-400 text-lg font-medium">
              📷 Image এখানে বসাও
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS AND SERVICES ===== */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-[#fdf8f4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="w-full h-80 lg:h-[420px] rounded-2xl bg-gray-200 flex items-center justify-center text-gray-400 text-lg font-medium">
              📷 Image এখানে বসাও
            </div>
            {/* Content */}
            <div>
              <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-3">Catalog</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Products and services
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                We source and manage everything you need for apparel production.
                From raw materials to finished goods, we handle it all.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🧶", title: "Raw fabric", desc: "Cotton, linen, and blends sourced globally" },
                  { icon: "✂️", title: "Trim and lining fabrics", desc: "High quality finishing materials" },
                  { icon: "🪡", title: "Woven fabrics", desc: "Premium woven solutions" },
                  { icon: "⏱️", title: "Production lead time", desc: "Industry, trends and filtering materials" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="px-8 py-3 bg-[#1a9fd4] hover:bg-[#1589b8] text-white font-semibold rounded-xl transition-all duration-200 shadow-sm">
                Browse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative w-full py-28 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <img
          src={heroImg}
          alt="cta bg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-[#1a9fd4] text-sm font-semibold uppercase tracking-widest mb-3">Closing</p>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Ready to start sourcing?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10">
            Let us handle your manufacturing needs from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-base font-semibold rounded-xl transition-all duration-200 shadow-lg min-w-[140px]">
              Contact
            </button>
            <button className="px-10 py-4 bg-white hover:bg-gray-100 text-[#1a9fd4] text-base font-semibold rounded-xl transition-all duration-200 shadow-lg min-w-[140px]">
              Learn
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}