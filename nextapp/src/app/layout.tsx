import {
  Nunito_Sans as nunitoSans,
  Inconsolata as inconsolataFont,
} from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NoSSRWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

const LazyApp = dynamic(() => Promise.resolve(NoSSRWrapper), { ssr: false });

const nunito = nunitoSans({
  subsets: ["latin"],
  variable: "--nunito",
  display: "swap",
  adjustFontFallback: false,
});
const inconsolata = inconsolataFont({
  subsets: ["latin"],
  variable: "--inconsolata",
  display: "swap",
  adjustFontFallback: false,
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Strukd</title>
      </head>
      <body
        className={`${nunito.variable} ${inconsolata.variable}`}
        suppressHydrationWarning={true}
      >
        <LazyApp children={children} />
      </body>
    </html>
  );
}
