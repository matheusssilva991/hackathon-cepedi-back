import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Verifica se o email já está cadastrado
    await this.emailAlreadyExists(createUserDto.email);

    // Criptografa a senha
    const salt = await bcrypt.genSalt(10);
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);

    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.userRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(`Usuário não encontrado!`);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // Verifica se o usuário existe
    const user = await this.findOne(id);

    // Verifica se o email já está cadastrado
    if (updateUserDto.email && updateUserDto.email !== user.email) {
      await this.emailAlreadyExists(updateUserDto.email);
    }

    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt(10);
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
    }

    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    // Verifica se o usuário existe
    await this.findOne(id);

    return await this.userRepository.delete(id);
  }

  async emailAlreadyExists(email: string) {
    const count = await this.userRepository.count({ where: { email } });

    if (count > 0) {
      throw new BadRequestException('Email já cadastrado!');
    }
  }
}
