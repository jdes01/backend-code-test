import Genially from "../../domain/Genially";
import GeniallyRepository from "../../domain/GeniallyRepository";
import { CreateGeniallyCommand } from "../commands/createGenially.command";


export default class CreateGeniallyService {
  constructor(private repository: GeniallyRepository) {}

  public async execute(createGeniallyCommand: CreateGeniallyCommand): Promise<void> {
    const { id, name, description } = createGeniallyCommand;

    const genially = new Genially(id, name, description);

    await this.repository.save(genially);
  }
}
