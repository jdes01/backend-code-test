import Genially from "./Genially";

interface GeniallyRepository {
  save(genially: Genially): Promise<void>;

  find(id: string): Promise<Genially>;

  delete(id: string): Promise<void>;

  update(id: string, newName: string): Promise<void>; // only updates name; overloading update() could be an option; or maybe depending on an interface
}

export default GeniallyRepository;
