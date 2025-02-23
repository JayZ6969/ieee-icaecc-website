import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "ICAECC 2025 - REVA University",
  description: "IEEE-ICAECC-2025 Conference Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="True" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider theme={theme }>
        <AppRouterCacheProvider>
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
