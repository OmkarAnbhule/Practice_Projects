import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BurjKhalifa(props) {
  const { nodes, materials } = useGLTF('/models/burj_khalifa.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        scale={[0.0035,0.0017,0.0025]}
      />
    </group>
  )
}

useGLTF.preload('/models/burj_khalifa.glb')
