import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Import PrismaModule

@Module({
  imports: [PrismaModule], // Import PrismaModule here
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
