import mongoose from 'mongoose';
import { Application } from './declarations';
import logger from './logger';
import addId from './plugin/addId';

export default function (app: Application) {
  // Enable this and disable schema plugin at category.model.ts
  mongoose.plugin(addId);

  mongoose.connect(
    app.get('mongodb'),
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
   }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
}
