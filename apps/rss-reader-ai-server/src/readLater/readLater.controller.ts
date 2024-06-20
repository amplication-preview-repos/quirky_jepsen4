import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReadLaterService } from "./readLater.service";
import { ReadLaterControllerBase } from "./base/readLater.controller.base";

@swagger.ApiTags("readLaters")
@common.Controller("readLaters")
export class ReadLaterController extends ReadLaterControllerBase {
  constructor(protected readonly service: ReadLaterService) {
    super(service);
  }
}
