import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;
  todo: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  get client(): PrismaClient {
    return this.prisma;
  }
}
