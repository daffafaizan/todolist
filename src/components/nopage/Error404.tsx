import AnimatedComponents from "../animations/AnimatedComponents";
import Title from "../utils/Title";
import { Icon } from "@iconify/react";

function Error404() {
  return (
    <AnimatedComponents>
      <div
        id="blog"
        className="flex flex-col items-center justify-center h-screen py-20"
      >
        <Title>Error 404</Title>
        <Icon
          icon="nonicons:error-16"
          className="h-36 w-36 xxs:h-36 xxs:w-36 xxxs:h-36 xxxs:w-36 hover:scale-110 duration-300 text-red-600"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"></div>
      </div>
    </AnimatedComponents>
  );
}

export default Error404;
