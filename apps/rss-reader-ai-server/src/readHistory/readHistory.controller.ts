import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReadHistoryService } from "./readHistory.service";
import { ReadHistoryControllerBase } from "./base/readHistory.controller.base";

@swagger.ApiTags("readHistories")
@common.Controller("readHistories")
export class ReadHistoryController extends ReadHistoryControllerBase {
  constructor(protected readonly service: ReadHistoryService) {
    super(service);
  }
}
