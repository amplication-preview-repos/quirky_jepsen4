import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReadHistoryServiceBase } from "./base/readHistory.service.base";

@Injectable()
export class ReadHistoryService extends ReadHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
