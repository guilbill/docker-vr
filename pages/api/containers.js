// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getContainers, createContainer} from '../../services/docker';

export default async (req, res) => {    
    if(req.method === 'POST'){
        createContainer();
    }
    const containers = await getContainers();
    return res.status(200).json({ containers });
};
