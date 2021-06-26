import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories";
import { classToPlain } from "class-transformer";

export class ListTagsService {
  async execute() {
    const tagRepository = getCustomRepository(TagRepository);

    const tags = await tagRepository.find();

    return classToPlain(tags);
  }
}
