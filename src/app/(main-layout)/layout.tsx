import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const MainLayout = ({children} : {children: ReactNode}) => {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen container mx-auto">{children}</div>
        <Footer />
      </div>
    );
};

export default MainLayout;