import supertest, { SuperTest } from "supertest";
import app from "../../../../../api/app";
import Genially from "../../domain/Genially";
import InMemoryGeniallyRepository from "../persistance/InMemoryGeniallyRepository";

test("deleteGenially controller test", async () => {

    const api: SuperTest<supertest.Test> = supertest(app);

    const genially = new Genially("id", "name", "description");
    const repository = new InMemoryGeniallyRepository();
    repository.save(genially);

    const res = await api.post("/genially/deleteGenially").send({id: "id"}).expect(200);

    expect(res.body.status).toBe("genially deleted");
    
});


test("deleteGenially controller with empty id test", async () => {

    const api: SuperTest<supertest.Test> = supertest(app);

    const genially = new Genially("id", "name", "description");
    const repository = new InMemoryGeniallyRepository();
    repository.save(genially);

    const res = await api.post("/genially/deleteGenially").send({id: ""});

    expect(res.body.status).toBe("empty id error");
    
});