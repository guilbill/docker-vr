// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getContainers} from '../../services/docker';

export default async (req, res) => {
    const containers = await getContainers();
    return res.status(200).json({ containers });
};
