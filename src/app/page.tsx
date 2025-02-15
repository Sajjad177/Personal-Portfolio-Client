import Blog from "@/components/Home/Blog/Blog";
import Project from "@/components/Home/Project/Project";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/shared/Skills";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <Skills />
      <Project />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
