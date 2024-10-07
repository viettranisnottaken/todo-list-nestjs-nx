import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class TodosService {
  constructor(private dataSource: DataSource) {}

  
}