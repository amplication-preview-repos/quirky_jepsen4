import * as graphql from "@nestjs/graphql";
import { ReadHistoryResolverBase } from "./base/readHistory.resolver.base";
import { ReadHistory } from "./base/ReadHistory";
import { ReadHistoryService } from "./readHistory.service";

@graphql.Resolver(() => ReadHistory)
export class ReadHistoryResolver extends ReadHistoryResolverBase {
  constructor(protected readonly service: ReadHistoryService) {
    super(service);
  }
}
