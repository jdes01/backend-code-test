import supertest, { SuperTest } from "supertest";
import app from "../../../../../api/app";
import Genially from "../../domain/Genially";
import InMemoryGeniallyRepository from "../persistance/InMemoryGeniallyRepository";

test("renameGenially controller test", async () => {

    const api: SuperTest<supertest.Test> = supertest(app);

    const genially = new Genially("id", "name", "description");
    const repository = new InMemoryGeniallyRepository();
    repository.save(genially);

    const res = await api.post("/genially/renameGenially").send({id: "id", newName: "newName"}).expect(200);

    expect(res.body.status).toBe("genially renamed");
    
});


test("renameGenially controller with empty id test", async () => {

    const api: SuperTest<supertest.Test> = supertest(app);

    const genially = new Genially("id", "name", "description");
    const repository = new InMemoryGeniallyRepository();
    repository.save(genially);

    const res = await api.post("/genially/renameGenially").send({id: "", newName: "newName"});

    expect(res.body.status).toBe("empty id error");
    
});


test("renameGenially controller with empty newName test", async () => {

    const api: SuperTest<supertest.Test> = supertest(app);

    const genially = new Genially("id", "name", "description");
    const repository = new InMemoryGeniallyRepository();
    repository.save(genially);

    const res = await api.post("/genially/renameGenially").send({id: "id", newName: ""});

    expect(res.body.status).toBe("empty newName error");
    
});