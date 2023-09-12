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
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // Set the initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // Set model camera position smoothly
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Set model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.mouse.y / 10, -state.mouse.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>
}

export default CameraRig;