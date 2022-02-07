import Genially from "../../domain/Genially";
import GeniallyRepository from "../../domain/GeniallyRepository";

export default class InMemoryGeniallyRepository implements GeniallyRepository {
  private geniallys: Genially[] = new Array<Genially>();

  async save(genially: Genially): Promise<void> {
    await this.delete(genially.id);
    this.geniallys.push(genially);
  }

  async find(id: string): Promise<Genially> {
    return this.geniallys.find((genially) => genially.id === id);
  }

  async delete(id: string): Promise<void> {
    if( await this.find(id) instanceof Genially ){
      (await this.find(id)).delete();
    }
  }

  async update(id: string, newName: string): Promise<void> {
    if( await this.find(id) instanceof Genially ){
      (await this.find(id)).name = newName;
      (await this.find(id)).modify();
    }
  }
}
