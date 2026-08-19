import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import { router } from "./router";

// biome-ignore lint/style/noNonNullAssertion: expected here
const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  createRoot(rootElement).render(
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router} />
    </ChakraProvider>,
  );
}
