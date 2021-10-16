import fs from 'fs';
import path from 'path';
import getConfig from 'next/config';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { serverRuntimeConfig } = getConfig();

  const dirRelativeToPublicFolder = 'img';

  const dir = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    './public',
    dirRelativeToPublicFolder
  );

  const filenames = fs.readdirSync(dir);

  const images = filenames.map((name) =>
    path.join('/', dirRelativeToPublicFolder, name)
  );

  res.statusCode = 200;
  res.json(images);
};
