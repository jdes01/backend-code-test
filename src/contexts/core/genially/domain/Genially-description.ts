export class GeniallyDescription {

    private _description: string

    private readonly _maximumCharacters: number = 125;


    constructor(description: string|undefined){
        if(description.length > this._maximumCharacters){
            throw new Error("genially description too long error");
        }
        if( description == undefined) this._description = "";
        else this._description = description;
    }

    
    public get description(): string {
        return this._description;
    }
     
}