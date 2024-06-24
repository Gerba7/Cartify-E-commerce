import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "E-commerce App",
  description: "Developed by AustralisDevs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          {children}
      </body>
    </html>
  );
}
