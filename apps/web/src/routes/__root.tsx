import { Container } from "@chakra-ui/react";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";

import { Devtools } from "@/src/features/shared/app/devtools";
import { AppProvider } from "@/src/features/shared/app/provider";
import { Taskbar } from "@/src/features/shared/ui/taskbar";
import { Toaster } from "@/src/features/shared/ui/toaster";

import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <AppProvider>
      <Container fluid px="0" minH="dvh">
        <Taskbar />

        <HeadContent />
        <Outlet />

        <Toaster />
        <Devtools />
      </Container>
    </AppProvider>
  );
}
