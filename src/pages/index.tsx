import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import SimpleTodolist from "../components/SimpleTodolist";

function Projects() {
  const navigation = [
    {
      name: "Home",
      href: "https://daffafaizan.com",
      path: "/home",
      current: false,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
        <Sidebar navigation={navigation} />
        <AnimatedCursor
          color="255,255,255"
          innerSize={12}
          outerSize={45}
          innerScale={1}
          outerScale={2}
          outerAlpha={1}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
          innerStyle={{
            backgroundColor: "#333",
            mixBlendMode: "exclusion",
          }}
        />
        <div className="max-w-6xl w-11/12 mx-auto">
          <SimpleTodolist />
          <Socials />
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Projects;
