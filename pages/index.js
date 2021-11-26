import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Scene = dynamic(() => import('../components/scene/Scene.jsx'), {
    ssr: false,
});

export default function Home(props) {
    const [containers, setContainers] = useState(props.containers || []);

    const refreshContainers = async () => {
        const res = await fetch('/api/containers');
        const { containers } = await res.json();
        setContainers(containers);
    };

    useEffect(() => {
        const interval = setInterval(() => refreshContainers(), 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Scene
            {...props}
            containers={containers}
            refreshContainers={refreshContainers}
        />
    );
}
