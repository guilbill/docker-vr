import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { DefaultXRControllers, Interactive, VRCanvas } from '@react-three/xr';
import {
    Box,
    Environment,
    FirstPersonControls,
    OrbitControls,
    Plane,
    Reflector,
    Text,
} from '@react-three/drei';
import DockerContainer from '../container/DockerContainer';
import ConditionalCanvas from '../tools/ConditionalCanvas';

const Containers = (props) => {
    const { containers } = props;
    return (
        <>
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
                    // {' '}
                ))}
        </>
    );
};

Containers.propTypes = {
    containers: PropTypes.arrayOf(
        PropTypes.shape({
            Names: PropTypes.arrayOf(PropTypes.string),
            State: PropTypes.string,
            Id: PropTypes.string,
        })
    ).isRequired,
};

const Scene = (props) => {
    const { containers } = props;

    // const [texture] = useNormalTexture(52, {
    //     offset: [0, 0],
    //     repeat: [0.5, 0.5],
    //     anisotropy: 1,
    // });
    return (
        <Suspense fallback={null}>
            <ConditionalCanvas {...props}>
                <Environment preset="warehouse" background={true} />
                <OrbitControls />

                <ambientLight intensity={1} />
                <spotLight
                    intensity={0.6}
                    position={[30, 30, 50]}
                    angle={0.3}
                    penumbra={1}
                    castShadow
                />
                <Containers containers={containers} />
                {/* <Interactive onSelect={() => fetch(`/api/containers`, { method: 'POST' })}> */}
                <Box position={[4, 1, -2]} castShadow receiveShadow>
                    <meshStandardMaterial metalness={1} roughness={0.2} />
                    <Text
                        position={[0, 0, 0.2]}
                        fontSize={0.2}
                        color="#0B1B2D"
                        anchorX="center"
                        anchorY="middle"
                    >
                        New
                    </Text>
                </Box>
                {/* </Interactive> */}
            </ConditionalCanvas>
        </Suspense>
    );
};

Scene.propTypes = {
    containers: PropTypes.arrayOf(
        PropTypes.shape({
            Names: PropTypes.arrayOf(PropTypes.string),
            State: PropTypes.string,
            Id: PropTypes.string,
        })
    ).isRequired,
};

export default Scene;
