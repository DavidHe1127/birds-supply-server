import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.load({silent: true, path: `${__dirname}/.env`});
}
