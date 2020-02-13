// category-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import addId from "../plugin/addId";

export default function (app: Application) {
  const modelName = 'category';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const schema = new Schema(
    {
      text: {
        type: String,
        required: true
      },
      details: [
        {
          _id: false,
          name: String,
          info: String
        }
      ]
    },
    {
      timestamps: true,
    }
  );

  // Enable this and disable global plugin at mongoose.ts
  // schema.plugin(addId);

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
}
