import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  constructor(){}

  @Get('todos')
  findAll() {
    
  }
}