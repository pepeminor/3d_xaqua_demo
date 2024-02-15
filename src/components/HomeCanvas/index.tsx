"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

import soundon from "../../../public/soundon.png";
import soundoff from "../../../public/soundoff.png";
import Loader from "../Loader";

import NewIsland from "@/models/NewIsland";

const Bird = dynamic(() => import("@/models/Bird").then((res) => res.Bird), {
  ssr: false,
} as any);

const Sky = dynamic(() => import("@/models/Sky").then((res) => res.Sky), {
  ssr: false,
} as any);

const HomeCanvas = () => {
  const audio = new Audio("/sakura.mp3");
  const audioRef = useRef(audio);
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      screenPosition = [0, 2, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth <= 850) {
      screenScale = [4, 4, 4];
      screenPosition = [0, 0, 0];
    } else if (window.innerWidth <= 450) {
      screenScale = [2, 2, 2];
      screenPosition = [0, 0, 0];
    } else {
      screenScale = [5, 5, 5];
      screenPosition = [0, 0, -3];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="relative h-screen w-full">
      {/* <div className="absolute left-0 right-0 top-28 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> */}
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        className={`bg-transparent h-screen w-full ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 0, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <NewIsland
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff.src : soundon.src}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="h-10 w-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default HomeCanvas;
