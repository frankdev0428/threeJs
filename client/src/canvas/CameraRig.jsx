import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot  } from 'valtio';
import { Group } from 'three';
import state from '../store';
const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    easing.dampE(
      group.current.roration,
      [state.pointer.y/10, -state.pointer.x /5,0],
      0.25,
      delta
    )
  })
  //set model reotation smoothly
  return <group>{children}</group>
}

export default CameraRig