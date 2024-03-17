import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AddressService } from '../address/address.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly addressService: AddressService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Verifica se o email já está cadastrado
    await this.emailAlreadyExists(createUserDto.email);

    // Verifica se o cpf já está cadastrado
    if (createUserDto.cpf) {
      await this.cpfAlreadyExists(createUserDto.cpf);
    }

    // Verifica se o cnpj já está cadastrado
    if (createUserDto.cnpj) {
      await this.cnpjAlreadyExists(createUserDto.cnpj);
    }

    // Verifica se o endereço existe
    if (createUserDto.addressId) {
      await this.addressService.findOne(createUserDto.addressId);
    }

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

    // Verifica se o cpf já está cadastrado
    if (updateUserDto.cpf && updateUserDto.cpf !== user.cpf) {
      await this.cpfAlreadyExists(updateUserDto.cpf);
    }

    // Verifica se o cnpj já está cadastrado
    if (updateUserDto.cnpj && updateUserDto.cnpj !== user.cnpj) {
      await this.cnpjAlreadyExists(updateUserDto.cnpj);
    }

    // Verifica se o endereço existe
    if (updateUserDto.addressId) {
      await this.addressService.findOne(updateUserDto.addressId);
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

  async cpfAlreadyExists(cpf: string) {
    const count = await this.userRepository.count({ where: { cpf } });

    if (count > 0) {
      throw new BadRequestException('CPF já cadastrado!');
    }
  }

  async cnpjAlreadyExists(cnpj: string) {
    const count = await this.userRepository.count({ where: { cnpj } });

    if (count > 0) {
      throw new BadRequestException('CNPJ já cadastrado!');
    }
  }

  async checkCredentials(email: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      select: ['name', 'email', 'password', 'id'],
    });

    if (!user) {
      throw new BadRequestException('Email ou senha incorretos!');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Email ou senha incorretos!');
    }

    delete user.password;
    return user;
  }
}
