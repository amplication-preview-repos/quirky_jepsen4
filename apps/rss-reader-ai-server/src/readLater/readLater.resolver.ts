import * as graphql from "@nestjs/graphql";
import { ReadLaterResolverBase } from "./base/readLater.resolver.base";
import { ReadLater } from "./base/ReadLater";
import { ReadLaterService } from "./readLater.service";

@graphql.Resolver(() => ReadLater)
export class ReadLaterResolver extends ReadLaterResolverBase {
  constructor(protected readonly service: ReadLaterService) {
    super(service);
  }
}
