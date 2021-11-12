import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import getContainers from '../services/docker';

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
        const interval = setInterval(() => refreshContainers(), 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Scene containers={containers} refreshContainers={refreshContainers} />
    );
}

export async function getServerSideProps() {
    const containers = await getContainers();
    return { props: { containers } };
}
