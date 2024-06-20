import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StarServiceBase } from "./base/star.service.base";

@Injectable()
export class StarService extends StarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
