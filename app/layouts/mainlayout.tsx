// import { Outlet } from "react-router";
// // import Footer from "~/shared/footer";
// // import Navber from "/sha
// import Navbar from "./components/shared/Navbar";
// export default function mainlayout() {
//     return (
//         <div>
//             <Navbar />
//             {/* <Outlet /> */}
//             {/* <Footer /> */}

//         </div>
//     );
// }
// layouts/mainlayout.tsx
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "~/components/shared/Footer";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />  {/* ✅ এটা অবশ্যই থাকতে হবে */}
        </>
    );
}