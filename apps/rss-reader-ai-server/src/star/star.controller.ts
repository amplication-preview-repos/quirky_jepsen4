import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StarService } from "./star.service";
import { StarControllerBase } from "./base/star.controller.base";

@swagger.ApiTags("stars")
@common.Controller("stars")
export class StarController extends StarControllerBase {
  constructor(protected readonly service: StarService) {
    super(service);
  }
}
