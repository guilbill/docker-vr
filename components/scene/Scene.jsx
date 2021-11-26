import React, { Suspense, useState } from 'react';
import { animated, useSpring } from '@react-spring/three';
import { useDrag } from '@use-gesture/react';
import PropTypes from 'prop-types';
import { DefaultXRControllers, Interactive, VRCanvas } from '@react-three/xr';
import { Box, OrbitControls, Stage, Text } from '@react-three/drei';
import DockerContainer from '../container/DockerContainer';
import ConditionalCanvas from '../tools/ConditionalCanvas';
import { useThree } from '@react-three/fiber';
import { easeCubicOut } from 'd3-ease';

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
                <ContainersScene containers={containers} />
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
const ContainersScene = ({ containers }) => {
    const position = [0, 1, 0];
    const AnimatedBox = animated(Box);
    const spring = useSpring({
        from: { position: [0, 100, 0] },
        to: { position },
        config: {
            easing: easeCubicOut,
        },
        delay: 400,
    });
    return (
        <Stage environment="warehouse" ambience={100}>
            <OrbitControls />
            <Containers containers={containers} />
            {/* <Interactive onSelect={() => fetch(`/api/containers`, { method: 'POST' })}> */}
            <AnimatedBox
                position={position}
                castShadow
                receiveShadow
                {...spring}
            >
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
            </AnimatedBox>
        </Stage>
    );
};
