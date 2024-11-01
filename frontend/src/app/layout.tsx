import type { Metadata } from "next";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-GeistSans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
