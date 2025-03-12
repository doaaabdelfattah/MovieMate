import { Outfit, Ovo, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/home/Navbar";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${roboto.className} antialiased  leading-8 `}
      >
        <div className="mb-20">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
