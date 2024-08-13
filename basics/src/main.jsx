import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import Experience from "./Experience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas>
      <Experience />
    </Canvas>
  </StrictMode>
);

/**
 * later on we will be using hooks that will only work with components created inside Canvas
 * So instead of polluting Canvas with unnecessary code, we can create components in other files and use those hooks there, so when we export those components and import them inside Canvas, it would be like those hooks are used inside canvas only
 */
