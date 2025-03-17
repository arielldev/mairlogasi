// src/layouts/Layout.tsx
import { FC, ReactNode } from "react";
import NavigationHeader from "../components/header2";
import Footer from "../components/footer";
import ContactUsWithWhatsApp from "../components/contact";
import SocialDropdown from "../components/socials";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Fixed headers container */}
      <div className="fixed top-0 left-0 w-full z-50">
        <NavigationHeader />
        <SocialDropdown />
      </div>

      {/* Main content with top padding to account for header heights */}
      <main className="pt-0 md:pt-[calc(5vh+37px)] overflow-hidden">
        {children}
      </main>
      <ContactUsWithWhatsApp />

      <Footer />
    </div>
  );
};

export default Layout;
