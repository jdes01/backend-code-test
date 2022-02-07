import Genially from "../../domain/Genially";
import InMemoryGeniallyRepository from "../../infrastructure/persistance/InMemoryGeniallyRepository";

test("InMemoryGeniallyRepository test", async () => {

    const geniallyRepository = new InMemoryGeniallyRepository();
    const genially = new Genially("id", "name", "description");

    expect(genially.name).toBe("name");
    expect(genially instanceof Genially).toBe(true);

    await geniallyRepository.save(genially);

    expect( await (await geniallyRepository.find("id")).name ).toBe(genially.name);
    expect( await (await geniallyRepository.find("id")) instanceof Genially ).toBe(true);

    expect( await (await geniallyRepository.find("notFound")) instanceof Genially ).toBe(false);

    await geniallyRepository.delete("id");

    expect( await (await geniallyRepository.find("id")) instanceof Genially ).toBe(true);
    expect( await (await geniallyRepository.find("id")).deletedAt.getSeconds() ).toBe(new Date().getSeconds());

});


test("InMemoryGeniallyRepository rename test", async () => {

    const geniallyRepository = new InMemoryGeniallyRepository();
    const genially = new Genially("id", "name", "description");

    expect(genially.name).toBe("name");

    await geniallyRepository.save(genially);

    expect( await (await geniallyRepository.find("id")).name ).toBe(genially.name);
    expect( await (await geniallyRepository.find("id")).modifiedAt ).toBeUndefined();

    await geniallyRepository.update("id", "newName");

    expect( await (await geniallyRepository.find("id")).name ).toBe("newName");
    expect( await (await geniallyRepository.find("id")).modifiedAt.getSeconds() ).toBe(new Date().getSeconds());

});