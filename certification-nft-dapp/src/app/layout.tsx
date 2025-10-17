import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CertificationNFT - TON Testnet",
  description: "Blockchain-based certificate management system on TON",
  icons: {
    icon: "https://peach-fast-clam-38.mypinata.cloud/ipfs/bafkreid4gh6axv3j62mstkpkfhosg5ofpoop6yoviwr5tydnd6bz3xnone",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
