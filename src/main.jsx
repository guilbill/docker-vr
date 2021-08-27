import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import './styles.css';
import Scene from './scene/Scene';

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Scene />
        </Suspense>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
