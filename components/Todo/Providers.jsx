"use client";

import { useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export default function Providers({ children }) {
  // create theme once
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: "#1976d2" },
          secondary: { main: "#f50057" },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* resets browser styles for consistent MUI look */}
      {children}
    </ThemeProvider>
  );
}
