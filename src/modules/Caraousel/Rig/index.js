import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState, useEffect } from "react";

export default function Rig({ models, setCurrentModel, ...props }) {
  const ref = useRef();
  const scroll = useScroll();
  const [initialAnimation, setInitialAnimation] = useState(true);
  const numCards = models.length; // Total number of cards/models

  useEffect(() => {
    // Set the initial animation state to false after a short duration
    const timeout = setTimeout(() => {
      setInitialAnimation(false);
    }, 2000); // Adjust duration for how long the animation lasts

    return () => clearTimeout(timeout);
  }, []);

  useFrame((state, delta) => {
    // Rotate carousel based on scroll offset
    const rotationY = -scroll.offset * (Math.PI * 2);
    ref.current.rotation.y = rotationY;

    // If initial animation, apply easing for smooth transition
    if (initialAnimation) {
      easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta);
    } else {
      // Fixed camera position after initial animation
      state.camera.position.set(0, 1.5, 10);
    }

    // Camera always looks at the center
    state.camera.lookAt(0, 0, 0);

    // Adjusting active card calculation for the reverse behavior
    const activeIndex = Math.round((-rotationY / (Math.PI * 2)) * numCards) % numCards;

    // Ensure the active index is within bounds and update the model
    const normalizedIndex = (activeIndex + numCards) % numCards; // Ensure positive index
    setCurrentModel(models[normalizedIndex]);
  });

  return <group ref={ref} {...props} />;
}
