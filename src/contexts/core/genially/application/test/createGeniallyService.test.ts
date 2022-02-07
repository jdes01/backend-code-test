import CreateGeniallyService from "../useCases/CreateGeniallyService";
import { CreateGeniallyCommand } from "../../application/commands/createGenially.command";
import InMemoryGeniallyRepository from "../../infrastructure/persistance/InMemoryGeniallyRepository";
import { v4 as uuid } from "uuid";

test("createGenially application service test", async () => {

    const id = uuid();

    const createGeniallyCommand = new CreateGeniallyCommand(id, "name", "description");
    expect(createGeniallyCommand.id).toBe(id);

    const geniallyRepository = new InMemoryGeniallyRepository();

    const createGeniallyService = new CreateGeniallyService(geniallyRepository);

    await createGeniallyService.execute(createGeniallyCommand);

    expect( await (await geniallyRepository.find(id)).name ).toBe("name");
});