import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@react-three/drei';
import { Interactive } from '@react-three/xr';

const RUNNING = '#D8DC6A';
const STOPPED = '#EB8258';
const DockerContainer = (props) => {
    const { position, text, running } = props;

    return (
        <Interactive>
            <Box position={position} castShadow receiveShadow>
                <meshStandardMaterial color={running ? RUNNING : STOPPED} />
                <Text
                    position={[0, 0, 1]}
                    fontSize={0.2}
                    color="#0B1B2D"
                    anchorX="center"
                    anchorY="middle"
                >
                    {text}
                </Text>
            </Box>
        </Interactive>
    );
};

DockerContainer.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    text: PropTypes.string.isRequired,
};

export default DockerContainer;
