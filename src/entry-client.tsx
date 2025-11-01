// import React from "react"

import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { Provider as ChakraProvider } from "./components/ui/provider";
hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
