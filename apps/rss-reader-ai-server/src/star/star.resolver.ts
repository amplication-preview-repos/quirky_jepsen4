import * as graphql from "@nestjs/graphql";
import { StarResolverBase } from "./base/star.resolver.base";
import { Star } from "./base/Star";
import { StarService } from "./star.service";

@graphql.Resolver(() => Star)
export class StarResolver extends StarResolverBase {
  constructor(protected readonly service: StarService) {
    super(service);
  }
}
