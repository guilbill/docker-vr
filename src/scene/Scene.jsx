import { Box, Plane, Sky, useMatcapTexture } from '@react-three/drei';
import { DefaultXRControllers, Hands, VRCanvas } from '@react-three/xr';
import React from 'react';

const Scene = () => {
    const [texture] = useMatcapTexture('045C5C_0DBDBD_049393_04A4A4');
    const [groundTexture] = useMatcapTexture('050505_747474_4C4C4C_333333');
    return (
        <VRCanvas>
            <Sky />
            <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshMatcapMaterial attach="material" matcap={groundTexture} />
            </Plane>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <DefaultXRControllers />
            <Box position={[-2, 1.1, -4]} castShadow>
                <meshMatcapMaterial attach="material" matcap={texture} />
            </Box>
            <Box position={[0, 1.1, -4]} castShadow>
                <meshMatcapMaterial attach="material" matcap={texture} />
            </Box>
            <Box position={[2, 1.1, -4]} castShadow>
                <meshMatcapMaterial attach="material" matcap={texture} />
            </Box>
            <Hands />
        </VRCanvas>
    );
};

export default Scene;
