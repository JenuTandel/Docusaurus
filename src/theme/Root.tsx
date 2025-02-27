import { MantineProvider } from "@mantine/core";
import React from "react";

interface RootProps {
  children: React.ReactNode;
}

export default function Root({ children }: RootProps) {
  return <MantineProvider>{children}</MantineProvider>;
}
