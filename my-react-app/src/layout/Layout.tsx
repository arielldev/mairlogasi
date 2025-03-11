// src/layouts/Layout.tsx
import React, { FC, ReactNode } from "react";
import WhatsAppHeader from "../components/header1";
import NavigationHeader from "../components/header2";
import Footer from "../components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Fixed headers container */}
      <div className="fixed top-0 left-0 w-full z-50">
        <WhatsAppHeader />
        <NavigationHeader />
      </div>

      {/* Main content with top padding to account for header heights */}
      <main className="pt-[calc(5vh+64px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
