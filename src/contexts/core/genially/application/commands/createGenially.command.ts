export class CreateGeniallyCommand {

    private _id: string
    private _name: string
    private _description: string


    constructor(id: string, name: string, description: string) {
     
        this._id = id;
        this._name = name;
        this._description = description;
    }

    
    public get id(): string {
        return this._id;
    }
    
    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }
}