import InMemoryGeniallyRepository from "../../infrastructure/persistance/InMemoryGeniallyRepository";
import CreateGeniallyService from "../useCases/CreateGeniallyService";
import { CreateGeniallyCommand } from "../commands/createGenially.command";
import { v4 as uuid } from "uuid";
import DeleteGeniallyService from "../useCases/DeleteGeniallyService";
import { DeleteGeniallyCommand } from "../commands/deleteGenially.command";

test("deleteGenially application service test", async () => {

    const id = uuid();

    const createGeniallyCommand = new CreateGeniallyCommand(id, "name", "description");
    const geniallyRepository = new InMemoryGeniallyRepository();
    const createGeniallyService = new CreateGeniallyService(geniallyRepository);
    await createGeniallyService.execute(createGeniallyCommand);

    expect( await (await geniallyRepository.find(id)).name ).toBe("name");
    expect( await (await geniallyRepository.find(id)).deletedAt ).toBeUndefined();

    const deleteGeniallyCommand = new DeleteGeniallyCommand(id);
    const deleteGeniallyService = new DeleteGeniallyService(geniallyRepository);
    await deleteGeniallyService.execute(deleteGeniallyCommand);

    expect( await (await geniallyRepository.find(id)).deletedAt.getSeconds() ).toBe(new Date().getSeconds());
});