import { GeniallyDescription } from "./Genially-description";
import { GeniallyId } from "./Genially-id";
import { GeniallyName } from "./Genially-name";


export default class Genially {
  private _id: GeniallyId;
  private _name: GeniallyName;
  private _description: GeniallyDescription;
  private _createdAt: Date;
  private _modifiedAt: Date;
  private _deletedAt: Date;

  constructor(id: string, name: string, description?: string) {
    this._id = new GeniallyId(id);
    this._name = new GeniallyName(name);
    this._description =  new GeniallyDescription(description);
    this._createdAt = new Date();
  }

  get id(): string {
    return this._id.id;
  }

  get name(): string {
    return this._name.name;
  }

  set name(newName: string) {
    this._name = new GeniallyName(newName);
  }  

  get description(): string {
    return this._description.description;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get modifiedAt(): Date {
    return this._modifiedAt;
  }

  get deletedAt(): Date {
    return this._deletedAt;
  }

  public delete(): void {
    this._deletedAt = new Date();
  }

  public modify(): void {
    this._modifiedAt = new Date();
  }
}
