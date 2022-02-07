import * as express from "express";
import { deleteGenially } from "../../contexts/core/genially/infrastructure/controllers/deleteGenially.controller";
import { createGenially } from "../../contexts/core/genially/infrastructure/controllers/createGenially.controller";
import { renameGenially } from "../../contexts/core/genially/infrastructure/controllers/renameGenially.controller";

const geniallyRouter = express.Router();

geniallyRouter.post("/createGenially", async (req, res) => {

    await createGenially(req, res);
});

geniallyRouter.post("/deleteGenially", async (req, res) => {

    await deleteGenially(req, res);
});

geniallyRouter.post("/renameGenially", async (req, res) => {

    await renameGenially(req, res);
});

export { geniallyRouter };