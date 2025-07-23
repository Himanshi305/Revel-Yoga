import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./scene";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Navbar from "./componenet/navbar";

const App = () => {
  return (
    <div className="w-screen h-screen bg-zinc-800 overflow-hidden">
      <Navbar />
      <Canvas className="w-screen h-screen" flat camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={5}
            luminanceThreshold={0}
            luminanceSmoothing={0}
            />
        </EffectComposer>
      </Canvas>
      </div>
  );
};

export default App;