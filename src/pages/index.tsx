import Sidebar from "../components/ui/Sidebar";
import Footer from "../components/ui/Footer";
import Socials from "../components/utils/Socials";
import { useEffect } from "react";
import AnimatedPage from "../components/animations/AnimatedPage";
import SimpleTodolist from "../components/todolist/SimpleTodolist";

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
