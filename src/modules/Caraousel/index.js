import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls, SpotLight } from '@react-three/drei'
import './util'
import Rig from './Rig'
import Card from './Card'
import { Suspense, useState } from 'react'
import { GLBModelLoader } from './utils'
import * as THREE from 'three'

const models = [
  { name: 'burj_khalifa' },
  { name: 'eiffel_tower' },
  { name: 'rome_colosseum' },
  { name: 'statue_of_liberty' },
  { name: 'sydney_opera_house' },
  { name: 'taj_mahal' }
];

export const App = () => {
  const [currentModel, setCurrentModel] = useState(models[0]);
  const [hover, setHovered] = useState(false)

  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 15 }} className='w-full h-full'>
      <ScrollControls horizontal={true} drag={false} pages={4} infinite style={{ scrollbarWidth: 'none' }}>
        {!hover &&
          <Rig models={models} setCurrentModel={setCurrentModel}>
            <Carousel setCurrentModel={setCurrentModel} />
          </Rig>
        }
      </ScrollControls>
      <Suspense fallback={null}>
        <GLBModelLoader modelName={currentModel.name} hover={hover} setHovered={setHovered} />

        <spotLight
          position={[0, -5, 0]}
          angle={0.6}
          penumbra={0.5}
          intensity={1.5}
          castShadow
          target={new THREE.Object3D()}
        />
      </Suspense>

      <Environment preset="sunset" background blur={0.5} />
    </Canvas >
  )
}

function Carousel({ radius = 2.4, count = 6, setCurrentModel }) {
  return models.map((model, i) => (
    <Card
      key={i}
      url={`/images/${model.name}.jpg`}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      models={models}
      setCurrentModel={setCurrentModel}
      index={i}
    />
  ));
}
