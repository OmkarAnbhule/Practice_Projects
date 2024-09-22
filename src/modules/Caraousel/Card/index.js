import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Image } from '@react-three/drei';

export default function Card({ url, models, index, setCurrentModel, ...props }) {
    const ref = useRef();
    const [hovered, hover] = useState(false);

    const pointerOver = (e) => (e.stopPropagation(), hover(true), setCurrentModel(models[index]));
    const pointerOut = () => hover(false);

    useFrame((state, delta) => {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
        easing.damp(ref.current.material, 'zoom', 0.8, 0.2, delta);
    });

    return (
        <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
            <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        </Image>
    );
}