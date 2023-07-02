import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
  return (
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
  );
}

export default CustomCursor;
