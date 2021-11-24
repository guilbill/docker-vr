import Dockerode from 'dockerode';

const docker = Dockerode({ socketPath: '/var/run/docker.sock' });
const getContainers = async () => docker.listContainers({ all: true });
const getContainer = async (id) => docker.getContainer(id);
const createContainer = async () => docker.run('node');

export { getContainers, getContainer, createContainer };
