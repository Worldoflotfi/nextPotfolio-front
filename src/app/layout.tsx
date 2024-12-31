import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import {ThemeProvider} from '../utils/ThemeContext';
// import { useLoadUserQuery } from "@/redux/features/api/apiSlice";   //need redux for this


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Amine Lotfi",
  description: "",
};


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Poppins',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Josefin',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PNG favicon */}
        <link rel="icon" type="image/png" sizes="500x500" href="/images/LTF.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}  ${josefin.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}



// const Custom: React.FC<{children: React.ReactNode}> = ({children}) => {
//   const {isLoading} = useLoadUserQuery({});
//   return(
//     <>
//     {
//       isLoading ? <Loader /> : <>{children}</>
//     }
//     </>
//   )
// }