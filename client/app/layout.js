import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Navbar/Navbar";
import Footer from "./ui/components/Footer/Footer";
import { AuthContextProvider } from "@/context/AuthContext";
import NavbarContainer from "./ui/components/Navbar/NavbarContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cartify",
  description: "The best way toget your dreams car",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: '#191C1C'}} className={inter.className}>
        <AuthContextProvider>
          <NavbarContainer />
          {children}
        </AuthContextProvider>
        <Footer />
      </body>
    </html>
  );
}
