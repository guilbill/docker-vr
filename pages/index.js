import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/scene/Scene.jsx'), {
    ssr: false,
});

export default function Home() {
    return <Scene />;
}
