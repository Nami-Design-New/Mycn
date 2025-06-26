import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";
import ResponsiveNav from "../ui/layout/ResponsiveNav";
import useAuth from "../hooks/useAuth";
import PageLoader from "./../ui/PageLoader";

export default function RootLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const auth = useAuth();

  if (auth.loading) return <PageLoader />;

  return (
    <>
      <Header auth={auth} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ResponsiveNav />
    </>
  );
}
