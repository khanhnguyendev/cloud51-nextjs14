import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";
import TopPage from "../components/TopPage";
import { PhoneIcon } from "../components/Icons";
import AlwaysOnTop from "../components/AlwaysOnTop";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud51",
  description: "Cloud51 Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
          <Navbar />
          <TopPage />
          <main className="mx-auto max-w-5xl px-6">{children}</main>
          <AlwaysOnTop />
        </Provider>
      </body>
    </html>
  );
}
