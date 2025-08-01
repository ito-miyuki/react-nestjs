import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    const { title, userId } = createTodoDto;
    return this.prisma.todo.create({
      data: {
        title,
        user: {
          connect: { id: userId },
        },
      },
    });
  }


  findAll() {
    return this.prisma.todo.findMany({
      include: { user: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  // update(id: number, updateTodoDto: UpdateTodoDto) {
  //   return `This action updates a #${id} todo`;
  // }

  update(id: number, data: { completed: boolean }) {
    return this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
