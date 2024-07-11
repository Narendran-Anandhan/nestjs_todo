import { Controller, Get, Post, Body, Patch, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    const todo = await this.todoService.findOne(Number(id));
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  @Post()
  async create(@Body() body:  CreateTodoDto): Promise<Todo> {
    console.log('controller log:',body);
    return this.todoService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() todoUpdateDto: UpdateTodoDto): Promise<Todo> {
    const updatedTodo = await this.todoService.update(Number(id), todoUpdateDto);
    if (!updatedTodo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return updatedTodo;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Todo> {
    const deletedTodo = await this.todoService.remove(Number(id));
    if (!deletedTodo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return deletedTodo;
  }
}
