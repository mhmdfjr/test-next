import { Inter } from "next/font/google";
import localFont from '@next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const gilroy = localFont({
  src: '../../public/fonts/Gilroy-Regular.ttf',
})

export const gilroyBold = localFont({
  src: '../../public/fonts/Gilroy-Bold.ttf',
})

export const thunder = localFont({
  src: '../../public/fonts/Thunder-LC.ttf',
})

export const thunderBold = localFont({
  src: '../../public/fonts/Thunder-BoldLC.ttf',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={gilroy.className}>{children}</body>
    </html>
  );
}
