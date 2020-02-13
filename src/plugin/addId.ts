import { Schema } from 'mongoose';

const addId = function init(schema: Schema) {
    schema.add({
        _id: {
            type: String,
            default: () => Math.random().toString(36).substring(7),
        }
    })
};

export default addId;
