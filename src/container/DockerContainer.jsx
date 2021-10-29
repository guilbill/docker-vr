import React from 'react';
import PropTypes from 'prop-types';
import { Texture } from 'three';
import { Box, Text } from '@react-three/drei';

const DockerContainer = (props) => {
    const { position, texture, color, text } = props;
    return (
        <Box position={position} castShadow>
            <meshStandardMaterial normalMap={texture} color={color} />
            <Text
                position={[0, 0, 1]}
                fontSize={0.1}
                color="#ff8484"
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </Box>
    );
};

DockerContainer.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    texture: PropTypes.objectOf(Texture).isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default DockerContainer;