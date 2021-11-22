// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getContainer, getContainers} from '../../../services/docker';

export default async (req, res) => {
    const {id} = req.query;
    const containers = await getContainers({filters:{'id':id}});
    const containerState = containers.find((c)=>c.Id===id).State;
    const container = await getContainer(id);
    console.log(containerState);
    if (containerState === 'running') {
        container.stop();
    } 
    if (containerState !== 'running' && containerState !== 'restarting') {
        container.start();
    }
    return res.status(200).json({ container });
};
