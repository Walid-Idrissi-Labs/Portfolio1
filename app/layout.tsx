import type { Metadata } from "next";

import "./globals.css";
import { ibmFont, unboundedFont , latoFont } from "./fonts";

export const metadata: Metadata = {
  title: "Portfolio Test 1",
  description: "testing...",
};



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en"
      //data-darkreader-mode="dynamic"
      //data-darkreader-scheme="dark"
      //data-darkreader-proxy-injected="true"
      className={`${unboundedFont.variable} ${ibmFont.variable}  ${latoFont.variable}  `}
      >
      <body className={` dark:bg-black text-black no-scrollbar ` }>
        {children}
      </body>
    </html>
  );
}
