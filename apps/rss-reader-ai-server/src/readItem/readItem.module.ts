import { Module } from "@nestjs/common";
import { ReadItemModuleBase } from "./base/readItem.module.base";
import { ReadItemService } from "./readItem.service";
import { ReadItemController } from "./readItem.controller";
import { ReadItemResolver } from "./readItem.resolver";

@Module({
  imports: [ReadItemModuleBase],
  controllers: [ReadItemController],
  providers: [ReadItemService, ReadItemResolver],
  exports: [ReadItemService],
})
export class ReadItemModule {}
