import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SydneyOperaHouse(props) {
  const { nodes, materials } = useGLTF('/models/sydney_opera_house.glb')
  return (
    <group {...props} dispose={null} scale={0.04}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.FINS}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.GLASS}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.BRONZE}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.STONE}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.LIGHTPOLE}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.LIGHT}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.PaletteMaterial001}
        position={[4.816, -0.52, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[50.968, 31.488, 53.621]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.material_9}
        position={[28.669, 21.907, -32.417]}
        rotation={[Math.PI / 2, 0, 0.743]}
        scale={[41.647, 43.265, 23.825]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.PaletteMaterial002}
        position={[0, 8.96, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
      />
    </group>
  )
}

useGLTF.preload('/models/sydney_opera_house.glb')
