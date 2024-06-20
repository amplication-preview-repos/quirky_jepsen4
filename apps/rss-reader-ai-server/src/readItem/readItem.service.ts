import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReadItemServiceBase } from "./base/readItem.service.base";

@Injectable()
export class ReadItemService extends ReadItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
