import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Todo } from '@prisma/client';
@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Todo[]> {
    return this.prisma.client.todo.findMany(); // Using Prisma Client to find all Todo items
  }

  async findOne(id: number): Promise<Todo | null> {
    return this.prisma.client.todo.findUnique({
      where: { id },
    }); // Using Prisma Client to find a specific Todo item by id
  }

  async create(data: CreateTodoDto): Promise<Todo> {
    console.log('client request:',data);
    return this.prisma.client.todo.create({
      data,
    }); // Using Prisma Client to create a new Todo item
  }

  async update(id: number, data: Prisma.TodoUpdateInput): Promise<Todo> {
    return this.prisma.client.todo.update({
      where: { id },
      data,
    }); // Using Prisma Client to update an existing Todo item
  }

  async remove(id: number): Promise<Todo> {
    return this.prisma.client.todo.delete({
      where: { id },
    }); // Using Prisma Client to delete a Todo item
  }
}