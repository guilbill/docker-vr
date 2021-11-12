import React from 'react';
import DockerContainer from '../container/DockerContainer';
import { DefaultXRControllers, VRCanvas } from '@react-three/xr';
import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';

const Containers = (props) => {
    const { containers } = props;
    return (
        <Physics>
            {containers &&
                containers.map((container, index) => (
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
const Scene = (props) => {
    const { containers } = props;

    return (
        <VRCanvas>
            <Sky />
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
