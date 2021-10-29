import Dockerode from 'dockerode';

const docker = Dockerode({ socketPath: '/var/run/docker.sock' });
const getContainers = async () => docker.getContainers();

export { getContainers as default };
