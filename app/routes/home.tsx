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

import heroImg from "../components/Assets/image 1.png";

export function loader() { return {}; }

export default function Home() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden mt-16">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="hero bg"
        className="absolute inset-0 w-full h-full object-cover object-center scale-95 origin-center"
      />
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block px-6 py-2 bg-black/40 backdrop-blur-sm text-white text-sm sm:text-base font-medium rounded-full border border-white/20">
            House Of Fashion Stitching
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
          Your trusted partner <br className="hidden sm:block" />
          in apparel sourcing
        </h1>

        {/* Sub Text */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          We connect international buyers with reliable manufacturers across Bangladesh.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-10 py-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg min-w-[160px]">
            Contact US
          </button>
          <button className="px-10 py-4 bg-white hover:bg-gray-100 text-[#1a9fd4] text-base sm:text-lg font-semibold rounded-xl shadow-lg min-w-[160px]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}