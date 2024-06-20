import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReadLaterServiceBase } from "./base/readLater.service.base";

@Injectable()
export class ReadLaterService extends ReadLaterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
