// import Dockerode from 'dockerode';

// const docker = Dockerode({ socketPath: '/var/run/docker.sock' });
// const getContainers = async () => docker.getContainers();
const getContainers = () => {
    return [{ Names: ['plop'] }, { Names: ['plip'] }];
};

export { getContainers as default };
