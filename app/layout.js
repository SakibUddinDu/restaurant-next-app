import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Lws-kitchen",
  description: "A Restaurant web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
