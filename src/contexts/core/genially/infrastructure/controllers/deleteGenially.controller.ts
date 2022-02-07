import {Request, Response} from "express";
import DeleteGeniallyService from "../../application/useCases/DeleteGeniallyService";
import { DeleteGeniallyCommand } from "../../application/commands/deleteGenially.command";
//import InMemoryGeniallyRepository from "../persistance/InMemoryGeniallyRepository";
import MongoGeniallyRepository from "../persistance/MongoGeniallyRepository";

export const deleteGenially = (req: Request, res: Response) => {

    if(!req.body.id){
        res.send({status: "empty id error"});
        return;
    }
    
    const deleteGeniallyCommand = new DeleteGeniallyCommand(req.body.id);
    //const geniallyRepository = new InMemoryGeniallyRepository();
    const geniallyRepository = new MongoGeniallyRepository();
    const deleteGeniallyService = new DeleteGeniallyService(geniallyRepository);

    deleteGeniallyService.execute(deleteGeniallyCommand);

    res.status(200).send({ status: "genially deleted" });
};