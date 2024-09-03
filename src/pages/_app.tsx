import { AppProps } from "next/app";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";


function TopBar(): JSX.Element {
  return <nav className="flex w-full text-white bg-black sticky top-0 z-10">Top Bar</nav>;
}

function Footer(): JSX.Element {
  return <footer className="block box-border bg-[#2b7495] p-2.5 h-full">Footer</footer>;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: React.ReactNode;
}
function RootLayout(layout: Readonly<LayoutProps>) {
  return (
    <div lang="en">
      <TopBar />
      <div className={inter.className}>{layout.children}</div>
      <Footer />
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;