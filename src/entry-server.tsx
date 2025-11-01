// import React from "react"
import { renderToString } from "react-dom/server";
import App from "./App";
import { Provider as ChakraProvider } from "./components/ui/provider";

export function render() {
  const html = renderToString(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );

  return { html };
}
