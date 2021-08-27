import { Plane, Sky, useNormalTexture } from '@react-three/drei';
import { DefaultXRControllers, Hands, VRCanvas } from '@react-three/xr';
import React from 'react';
import ContainerBox from '../container/ContainerBox';

const Scene = () => {
    const [texture] = useNormalTexture(52, {
        offset: [0, 0],
        repeat: [0.5, 0.5],
        anisotropy: 1,
    });
    const [groundTexture] = useNormalTexture(55, {
        offset: [0, 0],
        repeat: [100, 100],
        anisotropy: 1,
    });
    return (
        <VRCanvas>
            <Sky />
            <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshStandardMaterial
                    normalMap={groundTexture}
                    color="#848282"
                />
            </Plane>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <DefaultXRControllers />
            <ContainerBox
                position={[-2, 1.1, -4]}
                texture={texture}
                color="#313241"
            />
            <ContainerBox
                position={[0, 1.1, -4]}
                texture={texture}
                color="#313241"
            />

            <ContainerBox
                position={[2, 1.1, -4]}
                texture={texture}
                color="#313241"
            />

            <spotLight
                position={[1, 8, 1]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
            />
            <Hands />
        </VRCanvas>
    );
};

export default Scene;
