import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TajMahal(props) {
  const { nodes, materials } = useGLTF('/models/taj_mahal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.PaletteMaterial001}
        rotation={[-Math.PI / 2, 0, 8]}
        scale={0.003}
      />
    </group>
  )
}

useGLTF.preload('/models/taj_mahal.glb')
