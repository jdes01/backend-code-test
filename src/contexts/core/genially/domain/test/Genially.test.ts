import Genially from "../Genially";

test("Genially constructor test", () => {

    const genially = new Genially("id", "name", "description");

    expect(genially.id).toBe("id");
    expect(genially.name).toBe("name");
    expect(genially.description).toBe("description");
});


test("Genially empty constructor test", () => {

    const f = () =>{
        new Genially("", "name", "description");
    };
    expect(f).toThrow("empty genially id error");

    const g = () =>{
        new Genially("id", "", "description");
    };
    expect(g).toThrow("empty genially name error");
});


test("Wrong format genially name test", () => {

    const oneCharacterName = "a";
    const thirtyCharacterName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    const f = () =>{
        new Genially("id", oneCharacterName, "description");
    };
    expect(f).toThrow("genially name too short error");

    const g = () =>{
        new Genially("id", thirtyCharacterName, "description");
    };
    expect(g).toThrow("genially name too long error");
});


test("Wrong format genially description test", () => {

    const oneHundredThirtyCharactersDescription = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    const f = () =>{
        new Genially("id", "name", oneHundredThirtyCharactersDescription);
    };
    expect(f).toThrow("genially description too long error");

});