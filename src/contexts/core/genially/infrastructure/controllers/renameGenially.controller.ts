import {Request, Response} from "express";
import RenameGeniallyService from "../../application/useCases/RenameGeniallyService";
import { RenameGeniallyCommand } from "../../application/commands/renameGenially.command";
import InMemoryGeniallyRepository from "../persistance/InMemoryGeniallyRepository";

export const renameGenially = (req: Request, res: Response) => {

    if(!req.body.id){
        res.send({status: "empty id error"});
        return;
    }
    
    if(!req.body.newName){
        res.send({status: "empty newName error"});
        return;
    }

    const renameGeniallyCommand = new RenameGeniallyCommand(req.body.id, req.body.newName);
    const geniallyRepository = new InMemoryGeniallyRepository();
    const renameGeniallyService = new RenameGeniallyService(geniallyRepository);

    renameGeniallyService.execute(renameGeniallyCommand);

    res.status(200).send({ status: "genially renamed" });
};