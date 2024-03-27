import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from '../../address/entities/address.entity';

@Entity({ name: 'user', orderBy: { id: 'ASC' } })
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'cpf',
    type: 'varchar',
    length: 11,
    nullable: true,
    unique: true,
  })
  cpf: string;

  @Column({
    name: 'cnpj',
    type: 'varchar',
    length: 14,
    nullable: true,
    unique: true,
  })
  cnpj: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 255,
    nullable: false,
    select: false,
  })
  password: string;

  @Column({ name: 'address_id', type: 'int', nullable: true })
  addressId: number;

  @ManyToOne(() => Address, (address) => address.users, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
