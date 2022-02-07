import GeniallyRepository from "../../domain/GeniallyRepository";
import { DeleteGeniallyCommand } from "../commands/deleteGenially.command";

export default class DeleteGeniallyService {

  constructor(private repository: GeniallyRepository) {}
  
  public async execute(deleteGeniallyCommand: DeleteGeniallyCommand): Promise<void> {
    const { id } = deleteGeniallyCommand;
    this.repository.delete(id);
  }
}
