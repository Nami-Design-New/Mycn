import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../routes/Home";
import Error from "../routes/Error";
import Contact from "../routes/Contact";
import Faqs from "../routes/Faqs";
import ShippingCalculator from "../routes/ShippingCalculator";
import Login from "../routes/Login";
import Register from "../routes/Register";
import About from "../routes/About";
import Terms from "../routes/Terms";
import Privacy from "../routes/Privacy";
import PackageConsolidation from "../routes/PackageConsolidation";
import Repacking from "../routes/Repacking";
import Restricted from "../routes/Restricted&specialhandling";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "shipping-calculator",
        element: <ShippingCalculator />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "terms-conditions",
        element: <Terms />,
      },
      {
        path: "privacy-policy",
        element: <Privacy />,
      },
      {
        path: "package-consolidation",
        element: <PackageConsolidation />,
      },
      {
        path: "repacking",
        element: <Repacking />,
      },
      {
        path: "restricted-special-handling",
        element: <Restricted />,
      },
   
    ],
  },
]);
