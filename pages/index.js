import dynamic from 'next/dynamic';
import getContainers from '../services/docker';

const Scene = dynamic(() => import('../components/scene/Scene.jsx'), {
    ssr: false,
});

export default function Home(props) {
    const { containers } = props;
    return <Scene containers={containers} />;
}

export async function getServerSideProps() {
    const containers = await getContainers();
    return { props: { containers } };
}
