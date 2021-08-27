import { Box } from '@react-three/drei';
import { DefaultXRControllers, Hands, VRCanvas } from '@react-three/xr';
import React from 'react';

const Scene = () => (
    <VRCanvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <DefaultXRControllers />
        <Box position={[-1, 0, -4]} castShadow>
            <meshMatcapMaterial attach="material" />
        </Box>
        <Hands />
    </VRCanvas>
);

export default Scene;
