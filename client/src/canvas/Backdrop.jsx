import React , { useRef} from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows , RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows 
      position={[ 0, 0 , -0.14]}
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      >
      <RandomizedLight
      radius={9}
      intensity={0.7}
      ambient={0.25}
      position= {[ 5, 5, -10]}
      amount={4} />
       <RandomizedLight
      radius={5}
      intensity={0.3}
      ambient={0.8}
      position= {[ 5, 5, -10]}
      amount={4} />
    </AccumulativeShadows>
  )
}

export default Backdrop