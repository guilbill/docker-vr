import Dockerode from 'dockerode';

const docker = Dockerode({ socketPath: '/var/run/docker.sock' });
const getContainers = async () => docker.listContainers();

export { getContainers as default };
