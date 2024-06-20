import { Module } from "@nestjs/common";
import { StarModuleBase } from "./base/star.module.base";
import { StarService } from "./star.service";
import { StarController } from "./star.controller";
import { StarResolver } from "./star.resolver";

@Module({
  imports: [StarModuleBase],
  controllers: [StarController],
  providers: [StarService, StarResolver],
  exports: [StarService],
})
export class StarModule {}
