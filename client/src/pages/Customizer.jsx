import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { AIPicker , ColorPicker , CustomButton , FilePicker , Tab  } from '../component';
import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage,reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes  } from '../config/constants';
import { faceAnimation , slideAnimation } from '../config/motion';

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        Customizer
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer