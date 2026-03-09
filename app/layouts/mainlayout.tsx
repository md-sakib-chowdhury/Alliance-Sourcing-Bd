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
import Navbar from "../components/shared/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <h1>Home Page</h1>
        </>
    );
}