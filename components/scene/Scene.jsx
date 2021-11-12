import { OrbitControls } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import DockerContainer from '../container/DockerContainer';
import getContainers from '../../services/docker';
import { Canvas } from '@react-three/fiber';
import { DefaultXRControllers, VRCanvas } from '@react-three/xr';
import { Physics } from '@react-three/cannon';

const Containers = (props) => {
    const { containers } = props;
    return (
        <Physics>
            {containers.map((container, index) => (
                <DockerContainer
                    key={container.Names[0]}
                    position={[-2 + 2 * index, 0, -4]}
                    // texture={texture}
                    text={container.Names[0]}
                />
                //{' '}
            ))}
        </Physics>
    );
};
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

    const [containers, setContainers] = useState([]);

    useEffect(() => {
        setContainers(getContainers());
    }, []);

    return (
        <VRCanvas>
            <ambientLight />
            <spotLight />
            <Containers containers={containers} />
            <DefaultXRControllers />
        </VRCanvas>
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
        //
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
