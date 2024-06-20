import { Module } from "@nestjs/common";
import { ReadLaterModuleBase } from "./base/readLater.module.base";
import { ReadLaterService } from "./readLater.service";
import { ReadLaterController } from "./readLater.controller";
import { ReadLaterResolver } from "./readLater.resolver";

@Module({
  imports: [ReadLaterModuleBase],
  controllers: [ReadLaterController],
  providers: [ReadLaterService, ReadLaterResolver],
  exports: [ReadLaterService],
})
export class ReadLaterModule {}
