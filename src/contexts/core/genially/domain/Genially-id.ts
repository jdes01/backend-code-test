export class GeniallyId {

    private _id: string

    constructor(id: string){
        if(id == undefined){
            throw new Error("empty genially id error");
        }
        if(id.length == 0){
            throw new Error("empty genially id error");
        }
        this._id = id;
    }

    
    public get id(): string {
        return this._id;
    }

}