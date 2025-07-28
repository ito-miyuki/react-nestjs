import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // This action adds a new user
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
  return this.prisma.user.update({
    where: { id },
    data: updateUserDto,
  });
}

  // This action returns all user
  findAll() {
    return this.prisma.user.findMany();
  }

  // This action returns a #${id} user
  findOne(id: number) {
    return this.prisma.user.findUnique( { where: { id } });
  }

  // This action removes a #${id} user
  remove(id: number) {
    return this.prisma.user.delete( { where: { id } });
  }
}
