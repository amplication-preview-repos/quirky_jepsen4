import * as graphql from "@nestjs/graphql";
import { ReadItemResolverBase } from "./base/readItem.resolver.base";
import { ReadItem } from "./base/ReadItem";
import { ReadItemService } from "./readItem.service";

@graphql.Resolver(() => ReadItem)
export class ReadItemResolver extends ReadItemResolverBase {
  constructor(protected readonly service: ReadItemService) {
    super(service);
  }
}
