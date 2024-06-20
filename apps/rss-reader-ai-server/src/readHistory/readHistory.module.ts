import { Module } from "@nestjs/common";
import { ReadHistoryModuleBase } from "./base/readHistory.module.base";
import { ReadHistoryService } from "./readHistory.service";
import { ReadHistoryController } from "./readHistory.controller";
import { ReadHistoryResolver } from "./readHistory.resolver";

@Module({
  imports: [ReadHistoryModuleBase],
  controllers: [ReadHistoryController],
  providers: [ReadHistoryService, ReadHistoryResolver],
  exports: [ReadHistoryService],
})
export class ReadHistoryModule {}
