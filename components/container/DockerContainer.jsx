import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@react-three/drei';
import { Interactive } from '@react-three/xr';

const DockerContainer = (props) => {
    const { position, texture, text } = props;

    const [color, setColor] = useState('#313241');
    return (
        <Interactive
            onSelect={() =>
                setColor(color === '#ff8484' ? '#313241' : '#ff8484')
            }
        >
            <Box position={position} castShadow>
                <meshStandardMaterial color={color} />
                <Text
                    position={[0, 0, 1]}
                    fontSize={0.1}
                    color={color}
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
    texture: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default DockerContainer;
