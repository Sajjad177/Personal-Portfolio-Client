import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const MainLayout = ({children} : {children: ReactNode}) => {
    return (
      <div className="container mx-auto">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    );
};

export default MainLayout;