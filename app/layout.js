import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "ICAECC 2025 - REVA University",
  description: "IEEE-ICAECC-2025 Conference Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
