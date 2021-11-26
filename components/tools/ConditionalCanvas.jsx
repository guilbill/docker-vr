import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { DefaultXRControllers, VRCanvas } from '@react-three/xr';

const ConditionalCanvas = ({ children }) => {
    const [vrReady, setVrReady] = React.useState(false);

    useEffect(async () => {
        setVrReady(await navigator.xr.isSessionSupported('immersive-vr'));
    }, []);

    const Component = vrReady ? VRCanvas : Canvas;
    return (
        <Component
            style={{
                position: 'absolute',
                top: 0,
            }}
        >
            {children}
            {vrReady && <DefaultXRControllers />}
        </Component>
    );
};

ConditionalCanvas.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ConditionalCanvas;
