import React, { Suspense } from 'react';
import DockerContainer from '../container/DockerContainer';
import { DefaultXRControllers, VRCanvas } from '@react-three/xr';
import { Physics } from '@react-three/cannon';
import { Environment, Plane, Reflector, Sky } from '@react-three/drei';

const Containers = (props) => {
    const { containers } = props;
    return (
        <Physics>
            {containers &&
                containers.map((container, index) => (
                    <DockerContainer
                        key={container.Names[0]}
                        position={[
                            -2 + 2 * (index % 3),
                            1 + Math.floor(index / 3) * 2,
                            -4,
                        ]}
                        running={container.State === 'running'}
                        status={container.State}
                        text={container.Names[0]}
                        id={container.Id}
                    />
                    //{' '}
                ))}
        </Physics>
    );
};

const Scene = (props) => {
    const { containers } = props;

    // const [texture] = useNormalTexture(52, {
    //     offset: [0, 0],
    //     repeat: [0.5, 0.5],
    //     anisotropy: 1,
    // });
    return (
        <VRCanvas>
            {/* <Environment files="dikhololo_sunset_4k.hdr" /> */}
            <Reflector scale="200"
                position={[0, -2, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                mixStrength={0.5}
            >
                {(Material, props) => <Material {...props} />}
            </Reflector>
            <Plane
                scale="200"
                receiveShadow
                position={[0, 50, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <meshStandardMaterial color="white" />
            </Plane>
            <Plane receiveShadow position={[0, 0, -100]} scale="200">
                <meshStandardMaterial color="blue" />
            </Plane>
            <Plane receiveShadow position={[-50, 0, -10]} rotation={[0, Math.PI / 2, 0]} scale="200">
                <meshStandardMaterial color="green" />
            </Plane>
            <Plane receiveShadow position={[50, 0, -10]} rotation={[0, -Math.PI / 2, 0]} scale="200">
                <meshStandardMaterial color="red" />
            </Plane>

            <ambientLight intensity={1} />
            <spotLight
                intensity={0.6}
                position={[30, 30, 50]}
                angle={0.3}
                penumbra={1}
                castShadow
            />
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
