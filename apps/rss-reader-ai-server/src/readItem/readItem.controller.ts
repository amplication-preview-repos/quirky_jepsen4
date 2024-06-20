import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReadItemService } from "./readItem.service";
import { ReadItemControllerBase } from "./base/readItem.controller.base";

@swagger.ApiTags("readItems")
@common.Controller("readItems")
export class ReadItemController extends ReadItemControllerBase {
  constructor(protected readonly service: ReadItemService) {
    super(service);
  }
}
