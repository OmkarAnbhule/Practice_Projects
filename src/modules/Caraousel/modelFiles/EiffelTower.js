import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function EiffelTower(props) {
  const { nodes, materials } = useGLTF('/models/eiffel_tower.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        scale={[0.01, 0.01, 0.01]}
        position={[0, 1, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/eiffel_tower.glb')
