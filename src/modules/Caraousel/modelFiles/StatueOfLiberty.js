import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StatueOfLiberty(props) {
  const { nodes, materials } = useGLTF('/models/statue_of_liberty.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Statue_de_la_libert__Model_1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.02}
      />
    </group>
  )
}

useGLTF.preload('/models/statue_of_liberty.glb')
