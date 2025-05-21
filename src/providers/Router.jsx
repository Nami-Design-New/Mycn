import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../routes/Home";
import Error from "../routes/Error";
import Contact from "../routes/Contact";
import Faqs from "../routes/Faqs";
import Login from "../routes/Login";
import Register from "../routes/Register";
import About from "../routes/About";
import Terms from "../routes/Terms";
import Privacy from "../routes/Privacy";
import Profile from "../routes/Profile";
import MyShipments from "../routes/MyShipments";
import Address from "../routes/Address";
import Notifications from "../routes/Notifications";
import MyAddresses from "../routes/MyAddresses";
import PackageConsolidation from "../routes/PackageConsolidation";
import ShippingCalculator from "../routes/ShippingCalculator";
import Repacking from "../routes/Repacking";
import Restricted from "../routes/Restricted&specialhandling";
import MyTransactions from "../routes/MyTransactions";
import ShipmentDetails from "../routes/ShipmentDetails";
import NewPackages from "../routes/NewPackages";
import HowWeWorks from "../components/home/HowWeWorks";
import Howworks from "../routes/HowWorks";
import HowWorks from "../routes/HowWorks";

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
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <Address />,
          },
          {
            path: "my-shipments",
            children: [
              {
                index: true,
                element: <MyShipments />,
              },
              {
                path: ":id",
                element: <ShipmentDetails />,
              },
            ],
          },
          {
            path: "new-packages",
            element: <NewPackages />,
          },
          {
            path: "my-transactions",
            element: <MyTransactions />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "my-addresses",
            element: <MyAddresses />,
          },
        ],
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
       {
        path: "How_Work",
        element: <HowWorks />,
      },
    ],
  },
]);
