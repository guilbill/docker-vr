import React from 'react';
import PropTypes from 'prop-types';
import { Texture } from 'three';
import { Box } from '@react-three/drei';

const ContainerBox = (props) => {
    const { position, texture, color } = props;
    return (
        <Box position={position} castShadow>
            <meshStandardMaterial normalMap={texture} color={color} />
        </Box>
    );
};

ContainerBox.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    texture: PropTypes.objectOf(Texture).isRequired,
    color: PropTypes.string.isRequired,
};

export default ContainerBox;
