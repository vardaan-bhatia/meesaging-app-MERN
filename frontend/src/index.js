import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Approuter from "./Approuter";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <div className="bg-custom-back min-h-screen">
        <Approuter />
      </div>
    </React.StrictMode>
  </ChakraProvider>
);
