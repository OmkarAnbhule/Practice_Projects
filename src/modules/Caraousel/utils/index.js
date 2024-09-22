import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BurjKhalifa } from "../modelFiles/BurjKhalifa";
import { EiffelTower } from "../modelFiles/EiffelTower";
import { RomeColosseum } from "../modelFiles/RomeColosseum";
import { StatueOfLiberty } from "../modelFiles/StatueOfLiberty";
import { SydneyOperaHouse } from "../modelFiles/SydneyOperaHouse";
import { TajMahal } from "../modelFiles/TajMahal";
import { easing } from "maath"; // Importing easing for smooth animations

const RotatingModel = ({ children, setHovered, hover, modelName }) => {
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Continuous rotation around Y-axis
      modelRef.current.rotation.y += 0.01;

      // Smooth animation for position Y
      const targetY = hover ? -0.5 : 0;
      easing.damp(modelRef.current.position, 'y', targetY, 0.1, delta);

      // Smooth scaling when hovered
      const targetScale = hover ? [1.2, 1.2, 1.2] : [1, 1, 1]; // 20% increase in size
      easing.damp3(modelRef.current.scale, targetScale, 0.1, delta);
    }
  });

  const onPointerOver = () => setHovered(true);
  const onPointerOut = () => setHovered(false);

  return (
    <group ref={modelRef} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      {children}
    </group>
  );
};

export const GLBModelLoader = ({ modelName, setHovered, hover }) => {
  const modelMap = {
    burj_khalifa: <BurjKhalifa />,
    eiffel_tower: <EiffelTower />,
    rome_colosseum: <RomeColosseum />,
    statue_of_liberty: <StatueOfLiberty />,
    sydney_opera_house: <SydneyOperaHouse />,
    taj_mahal: <TajMahal />,
  };

  const selectedModel = modelMap[modelName.toLowerCase()] || null;

  if (!selectedModel) return null;

  return (
    <RotatingModel modelName={modelName} setHovered={setHovered} hover={hover}>
      {selectedModel}
    </RotatingModel>
  );
};
