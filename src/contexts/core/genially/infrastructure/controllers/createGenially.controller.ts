import { Request, Response } from "express";
import { CreateGeniallyCommand } from "../../application/commands/createGenially.command";
import CreateGeniallyService from "../../application/useCases/CreateGeniallyService";
//import InMemoryGeniallyRepository from "../persistance/InMemoryGeniallyRepository";

import { v4 as uuid } from "uuid";
import MongoGeniallyRepository from "../persistance/MongoGeniallyRepository";

const assertValidGeniallyName = (name: string) => {

    if(name == undefined){
        throw new Error("empty genially name error");
    }
    if(name.length == 0){
        throw new Error("empty genially name error");
    }
    if(name.length < 3){
        throw new Error("genially name too short error");
    }
    if(name.length > 20){
        throw new Error("genially name too long error");
    }
};


const assertValidGeniallyDescription = (description: string) => {

    if(description.length > 125){
        throw new Error("genially description too long error");
    }
};


export const createGenially = (req: Request, res: Response) => {
    
    const createGeniallyCommand = new CreateGeniallyCommand(uuid(), req.body.name, req.body.description);
    //const geniallyRepository = new InMemoryGeniallyRepository();
    const geniallyRepository = new MongoGeniallyRepository();
    const createGeniallyService = new CreateGeniallyService(geniallyRepository);

    try {
        assertValidGeniallyName(createGeniallyCommand.name);
        assertValidGeniallyDescription(createGeniallyCommand.description);
    } catch (error) {
        res.send({ status: error.message });
        return;
    }
    
    createGeniallyService.execute(createGeniallyCommand);

    res.status(200).send({ status: "genially created" });
};