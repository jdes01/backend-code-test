export class GeniallyName {

    private _name: string

    private readonly _minimumCharacters: number = 3;
    private readonly _maximumCharacters: number = 20;


    constructor(name: string){
        if(name == undefined){
            throw new Error("empty genially name error");
        }
        if(name.length == 0){
            throw new Error("empty genially name error");
        }
        if(name.length < this._minimumCharacters){
            throw new Error("genially name too short error");
        }
        if(name.length > this._maximumCharacters){
            throw new Error("genially name too long error");
        }
        this._name = name;
    }

    
    public get name(): string {
        return this._name;
    }

}