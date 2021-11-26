import React from 'react';
import PropTypes from 'prop-types';
import { Cylinder, Text } from '@react-three/drei';

const RUNNING = '#D8DC6A';
const STOPPED = '#EB8258';
const DockerContainer = (props) => {
    const { position, text, running } = props;

    return (
        // <Interactive onSelect={()=> fetch(`/api/containers/${id}`, {method:'POST'})}>
            <Cylinder position={position} castShadow receiveShadow>
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
            </Cylinder>
        // </Interactive>
    );
};

DockerContainer.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default DockerContainer;
