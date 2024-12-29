import "./globals.css";
import Head from 'next/head';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "WareLine Tech",
  description: "A Dropservicing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
        <Navbar />
        {children}
        <Footer />        
      </body>
    </html>
  );
}
