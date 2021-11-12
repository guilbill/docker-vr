import {
    Box,
    OrbitControls,
    Plane,
    Sky,
    useNormalTexture,
} from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
import { DefaultXRControllers, Interactive, VRCanvas } from '@react-three/xr';
import React, { useEffect, useState } from 'react';
// import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';
import DockerContainer from '../container/DockerContainer';
import getContainers from '../../services/docker';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';

const Scene = () => {
    // const [texture] = useNormalTexture(52, {
    //     offset: [0, 0],
    //     repeat: [0.5, 0.5],
    //     anisotropy: 1,
    // });
    // const [groundTexture] = useNormalTexture(55, {
    //     offset: [0, 0],
    //     repeat: [100, 100],
    //     anisotropy: 1,
    // });
    const [color, setColor] = useState('#313241');

    const [containers, setContainers] = useState([]);

    useEffect(() => {
        setContainers(getContainers());
    }, []);

    return (
        <Canvas>
            <ambientLight />
            <spotLight />

            <OrbitControls />

            <Physics>
                {containers.map((container, index) => (
                    // <Interactive
                    //     onSelect={() =>
                    //         setColor(color === '#ff8484' ? '#313241' : '#ff8484')
                    //     }
                    // >
                    <DockerContainer
                        key={container.Names[0]}
                        position={[-2 + 2 * index, 0, -4]}
                        // texture={texture}
                        color={color}
                        text={container.Names[0]}
                    />
                    // </Interactive>
                ))}
            </Physics>
        </Canvas>
        // <VRCanvas>
        //     <Sky />
        //     <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        //         <meshStandardMaterial
        //             normalMap={groundTexture}
        //             color="#848282"
        //         />
        //     </Plane>
        //     <ambientLight />
        //     <pointLight position={[10, 10, 10]} />
        //     <DefaultXRControllers />
        //     {containers.map((container, index) => (
        //         <Interactive
        //             onSelect={() =>
        //                 setColor(color === '#ff8484' ? '#313241' : '#ff8484')
        //             }
        //         >
        //             <DockerContainer
        //                 position={[-2 + 2 * index, 1.1, -4]}
        //                 texture={texture}
        //                 color={color}
        //                 text={container.Names[0]}
        //             />
        //         </Interactive>
        //     ))}

        //     <spotLight
        //         position={[1, 8, 1]}
        //         angle={0.3}
        //         penumbra={1}
        //         intensity={1}
        //         castShadow
        //     />
        // </VRCanvas>
    );
};

export default Scene;
