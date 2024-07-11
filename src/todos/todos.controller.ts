import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({ status: 200, description: 'Return all todos.' })
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get todo by ID' })
  @ApiParam({ name: 'id', description: 'Todo ID' })
  @ApiResponse({ status: 200, description: 'Return the todo.' })
  @ApiResponse({ status: 404, description: 'Todo not found.' })
  async findOne(@Param('id') id: string): Promise<Todo> {
    const todo = await this.todoService.findOne(Number(id));
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  @Post()
  @ApiOperation({ summary: 'Create a todo' })
  @ApiBody({ type: CreateTodoDto })
  @ApiResponse({ status: 201, description: 'The todo has been successfully created.' })
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a todo by ID' })
  @ApiParam({ name: 'id', description: 'Todo ID' })
  @ApiBody({ type: UpdateTodoDto })
  @ApiResponse({ status: 200, description: 'The todo has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Todo not found.' })
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const updatedTodo = await this.todoService.update(Number(id), updateTodoDto);
    if (!updatedTodo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return updatedTodo;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a todo by ID' })
  @ApiParam({ name: 'id', description: 'Todo ID' })
  @ApiResponse({ status: 200, description: 'The todo has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Todo not found.' })
  async remove(@Param('id') id: string): Promise<Todo> {
    const deletedTodo = await this.todoService.remove(Number(id));
    if (!deletedTodo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return deletedTodo;
  }
}
