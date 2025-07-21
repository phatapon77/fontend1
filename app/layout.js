import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./conponents/Navigation";
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'], // รองรับภาษาไทย
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'เว็บไซต์ของคุณ',
  description: 'เว็บไซต์ที่ใช้ฟอนต์ Prompt',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prompt.className}
      >
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
