import GeniallyRepository from "../../domain/GeniallyRepository";
import { RenameGeniallyCommand } from "../commands/renameGenially.command";

export default class RenameGeniallyService {

  constructor(private repository: GeniallyRepository) {}

  public async execute(renameGeniallyCommand: RenameGeniallyCommand): Promise<void> {
    const { id, newName } = renameGeniallyCommand;
    this.repository.update(id, newName);
  }
}
