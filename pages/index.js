import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import getContainers from '../services/docker';

const Scene = dynamic(() => import('../components/scene/Scene.jsx'), {
    ssr: false,
});

export default function Home(props) {
    const [containers, setContainers] = useState([]);

    useEffect(async () => {
        const res = await fetch(`/api/containers`);
        const { containers } = await res.json();
        setContainers(containers);
    }, []);

    return <Scene containers={containers} />;
}

export async function getServerSideProps() {
    const containers = await getContainers();
    return { props: { containers } };
}
