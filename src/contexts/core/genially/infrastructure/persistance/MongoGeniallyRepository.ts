import Genially from "../../domain/Genially";
import GeniallyRepository from "../../domain/GeniallyRepository";
import { Mongoose } from "mongoose";
import { geniallySchema } from "./genially.schema";

import "dotenv/config";

export default class MongoGeniallyRepository implements GeniallyRepository {

    private _mongoose: Mongoose = new Mongoose();
    private _schema = new this._mongoose.Schema(geniallySchema);
    private GeniallyModel = this._mongoose.model("genially", this._schema); 

    async save(genially: Genially): Promise<void> {

        await this._mongoose.connect(process.env.MONGO_URI);
        
        const doc = new this.GeniallyModel({

            id: genially.id,
            name: genially.name,
            description: genially.description,
            createdAt: genially.createdAt,
            modifiedAt: "",
            deletedAt: ""
        });

        await doc.save();

        this._mongoose.connection.close();
    }

    async find(id: string): Promise<Genially> {
        
        await this._mongoose.connect(process.env.MONGO_URI);

        const geniallyFound = await this.GeniallyModel.findOne({"id" : id});

        this._mongoose.connection.close();

        return geniallyFound;
    }

    async delete(id: string): Promise<void> {
        
        await this._mongoose.connect(process.env.MONGO_URI);

        await this.GeniallyModel.updateOne(
            {"id" : id},
            { $set : { "deletedAt" : new Date() } }
        );

        this._mongoose.connection.close();
    }

    async update(id: string, newName: string): Promise<void> {
        
        await this._mongoose.connect(process.env.MONGO_URI);

        await this.GeniallyModel.updateOne(
            {"id" : id},
            { $set : { "name" : newName, 
                       "modifiedAt" : new Date()
                     } 
            }
        );

        this._mongoose.connection.close();
    }
}