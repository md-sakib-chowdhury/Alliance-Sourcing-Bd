// routes/buyinghouse.tsx
import heroImg from "../components/Assets/52.png";

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

            </div>
        </section>
    );
}