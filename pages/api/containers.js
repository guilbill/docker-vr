// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getContainers from '../../services/docker';

export default function handler(req, res) {
    getContainers().then((containers) => {
        res.status(200).json({ containers });
    });
}
