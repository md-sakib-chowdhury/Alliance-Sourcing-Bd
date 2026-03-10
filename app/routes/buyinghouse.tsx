// routes/buyinghouse.tsx
import heroImg from "../components/Assets/51.png";

export function loader() { return {}; }

export default function BuyingHouse() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden mt-12">

            {/* Background Image */}
            <img
                src={heroImg}
                alt="buying house bg"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">

                {/* Badge */}
                <div className="mb-6">
                    <span className="inline-block px-6 py-2 bg-black/40 backdrop-blur-sm text-white text-sm sm:text-base font-medium rounded-full border border-white/20">
                        Our Services
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
                    Buying House
                </h1>

                {/* Sub Text */}
                <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                    We provide complete buying house solutions, managing everything
                    from product sourcing to quality control and final shipment
                    for international buyers.
                </p>

                {/* Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-10 py-4 bg-[#1a9fd4] hover:bg-[#1589b8] text-white text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg min-w-[160px]">
                        Contact US
                    </button>
                </div>
            </div>
        </section>
    );
}