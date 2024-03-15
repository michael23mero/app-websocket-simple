import { Schema, model } from 'mongoose'

const schemaUser = new Schema(
    {
        fullname: { type: String, uppercase: true, trim: true },

        telefono: { type: Number, default: 555 },

        direccion: { type: String, default: 'Manta' },
    },
    {
        versionKey: false
    }
)

export default model('collectionUser', schemaUser)