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
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
    </>
  );
}
