import { NextApiRequest, NextApiResponse } from 'next'

const listDir = (req: NextApiRequest, res: NextApiResponse): any => {
    return res.status(401).send('no')
}

export default listDir
