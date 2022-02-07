import { v4 as uuid } from "uuid";
import InMemoryGeniallyRepository from "../../infrastructure/persistance/InMemoryGeniallyRepository";
import CreateGeniallyService from "../useCases/CreateGeniallyService";
import RenameGeniallyService from "../useCases/RenameGeniallyService";
import { CreateGeniallyCommand } from "../commands/createGenially.command";
import { RenameGeniallyCommand } from "../commands/renameGenially.command";

test("renameGenially application service test", async () => {

    const id = uuid();

    const createGeniallyCommand = new CreateGeniallyCommand(id, "name", "description");
    const geniallyRepository = new InMemoryGeniallyRepository();
    const createGeniallyService = new CreateGeniallyService(geniallyRepository);
    await createGeniallyService.execute(createGeniallyCommand);

    expect( await (await geniallyRepository.find(id)).name ).toBe("name");
    expect( await (await geniallyRepository.find(id)).modifiedAt ).toBeUndefined();

    const renameGeniallyCommand = new RenameGeniallyCommand(id, "newName");
    const renameGeniallyService = new RenameGeniallyService(geniallyRepository);
    await renameGeniallyService.execute(renameGeniallyCommand);

    expect( await (await geniallyRepository.find(id)).name ).toBe(renameGeniallyCommand.newName);
    expect( await (await geniallyRepository.find(id)).modifiedAt.getSeconds() ).toBe(new Date().getSeconds());
});