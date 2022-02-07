export class RenameGeniallyCommand {

    private _id: string
    private _newName: string


    constructor(id: string, newName: string) {
     
        this._id = id;
        this._newName = newName;
    }

    
    public get id(): string {
        return this._id;
    }
    
    public get newName(): string {
        return this._newName;
    }

}