import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
@Module({
  imports: [TodosModule, PrismaModule],
  controllers: [AppController, TodosController],
  providers: [AppService, PrismaService, TodosService],
})
export class AppModule {}
