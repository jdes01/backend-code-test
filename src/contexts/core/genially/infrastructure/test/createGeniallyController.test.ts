import supertest, { SuperTest } from "supertest";
import app from "../../../../../api/app";

test("createGenially controller test", async () => {

    const api: SuperTest<supertest.Test> = supertest(app);

    const res = await api.post("/genially/createGenially").send({name: "name", description: "description"}).expect(200);

    expect(res.body.status).toBe("genially created");
    
});


test("createGenially controller when empty name test", async () => {

    const api: SuperTest<supertest.Test> = supertest(app);

    const res = await api.post("/genially/createGenially").send({name: "", description: "description"});

    expect(res.body.status).toBe("empty genially name error");
    
});