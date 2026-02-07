import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Test 1",
  description: "testing...",
};



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en"
      //data-darkreader-mode="dynamic"
      //data-darkreader-scheme="dark"
      //data-darkreader-proxy-injected="true"
      
      >
      <body className="dark:bg-black dark:text-brick text-black" >
        {children}
      </body>
    </html>
  );
}
