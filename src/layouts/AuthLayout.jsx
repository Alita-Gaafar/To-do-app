// Comps
import Background from "../components/auth/Background";
import Header from "../components/auth/Header";

// React router
import { Outlet } from "react-router";

export default function AuthLayout() {
  // const navigate = useNavigate();

  return (
    <>
      <section className="h-screen overflow-hidden flex justify-center items-center flex-col">
        {/* Top section */}
        <Header />

        {/* Background image */}
        <Background />

        
        <div className="sm:w-110 w-11/12 bg-white/95 p-5 sm:p-10 rounded-2xl dark:bg-neutral-800">
          {/* Child path */}
          <Outlet />
        </div>
      </section>
    </>
  );
}
