import { Outlet } from "react-router";
// Comps
import Background from "../components/auth/Background";
import Button from "../components/auth/Button";
import Header from "../components/auth/Header";

// External data
import { authButtons } from "@/util/data";

export default function AuthLayout() {
  return (
    <>
      <section className="h-screen overflow-hidden flex justify-center items-center flex-col">
        {/* Top section */}
        <Header />

        {/* Background image */}
        <Background />

        {/* Buttons to navigate between sign in and sign up pages */}
        <div className="sm:w-110 w-11/12 bg-white/95 p-5 sm:p-10 rounded-2xl">
          <div className="flex justify-between gap-2 mb-5">
            {authButtons.map((btn) => (
              <Button key={btn.id} title={btn.title} path={btn.path} />
            ))}
          </div>

          {/* Form */}
          <Outlet />
        </div>
      </section>
    </>
  );
}
