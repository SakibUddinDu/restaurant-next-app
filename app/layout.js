import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Lws-kitchen",
  description: "A Restaurant web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8 mt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
